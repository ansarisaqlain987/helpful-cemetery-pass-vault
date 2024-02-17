import { Schema, model } from "mongoose";
import { UserVault } from "../types";

const schema = new Schema<UserVault>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const UserModel = model('Vault', schema, 'vaults');