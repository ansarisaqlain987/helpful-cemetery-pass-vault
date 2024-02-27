import { Schema, model } from "mongoose";
import { UserAuth } from "../types";

const schema = new Schema<UserAuth>({
    email: { type: String, required: true, unique: true },
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

export const AuthModel = model('Auth', schema, 'auth');