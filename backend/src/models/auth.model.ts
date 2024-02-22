import { Schema, model } from "mongoose";
import { User } from "../types";

const schema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    lastLogin: { type: String, required: false },
    uid: { type: String, required: true },
    vaultKey: { type: String, required: true },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const AuthModel = model('User', schema, 'users');