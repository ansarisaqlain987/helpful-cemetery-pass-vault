import { Schema, model } from "mongoose";
import { VaultItem } from "../types";

const schema = new Schema<VaultItem>({
    vaultId: { type: String, required: true },
    name: { type: String, required: true },
    secret: { type: String, required: true }, // structure of secret will be defined at the frontend
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const VaultItemModel = model('VaultItem', schema, 'vaultitems');