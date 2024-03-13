import { Schema, model } from "mongoose";
import { UserDetails } from "../types";

const schema = new Schema<UserDetails>({
    email: { type: String, required: true, unique: true },
    uid: { type: String, required: true, unique: true },
    vaultKey: { type: String, required: true },
    active: { type: Boolean, default: true },
    firstName: { type: String, required: false, default: "" },
    lastName: { type: String, required: false, default: "" },
    alternateEmail: { type: String, required: false, default: "" },
    countryCode: { type: String, required: false, default: "" },
    contactNumber: { type: String, required: false, default: "" },
}, {
    timestamps: true
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const UserModel = model('UserDetail', schema, 'userdetails');