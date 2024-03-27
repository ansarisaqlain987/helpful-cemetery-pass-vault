import { Schema, model } from "mongoose";
import { UserVault, VaultItem } from "../types";


const itemSchema = new Schema<VaultItem>({
    name: { type: String, required: true },
    secret: { type: String, required: true },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

itemSchema.virtual('id').get(function () {
    return this._id.toString();
});

itemSchema.set('toJSON', { virtuals: true });

const schema = new Schema<UserVault>({
    uid: { type: Schema.Types.ObjectId, ref: 'UserDetail', required: true },
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    items: [itemSchema],
}, {
    timestamps: true
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const VaultModel = model('Vault', schema, 'vaults');