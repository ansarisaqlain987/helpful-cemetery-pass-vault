import { Schema, model } from "mongoose";
import { UserDetails } from "../types";

const schema = new Schema<UserDetails>({
    userId: { type: String, required: true },
    firstName: { type: String, required: false, default: "" },
    lastName: { type: String, required: false, default: "" },
    alternateEmail: { type: String, required: false, default: "" },
    countryCode: { type: String, required: false, default: "" },
    contactNumber: { type: String, required: false, default: "" },
});

schema.virtual('id').get(function () {
    return this._id.toString();
});

schema.set('toJSON', { virtuals: true });

export const UserModel = model('UserDetail', schema, 'userdetails');