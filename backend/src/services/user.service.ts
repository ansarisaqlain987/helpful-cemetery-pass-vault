import { AuthModel } from "../models/auth.model";
import { UserModel } from "../models/user.model";
import { UserAuth, UserDetails } from "../types";
import { sanitizeObject } from "../utils/sanity.util";
import { randomBytes } from "crypto";

const getUserByFilter = async (filter: Partial<UserAuth>) => {
    const queryFilter: Partial<UserAuth> = sanitizeObject(filter as any);
    return (await AuthModel.findOne({ ...queryFilter }))?.toJSON()
}

const addUserAuth = async (inputs: Pick<UserAuth, 'email' | 'uid'>) => {
    const doc = await AuthModel.create({ ...inputs, vaultKey: randomBytes(256).toString('hex') });
    const returnDoc = await doc.save();
    return returnDoc.toJSON();
}

const addUserDetails = async (inputs: Pick<UserDetails, 'firstName' | 'lastName' | 'userId' | 'alternateEmail' | 'contactNumber' | 'countryCode'>) => {
    const doc = await UserModel.create(inputs);
    const returnDoc = await doc.save();
    return returnDoc.toJSON();
}

const getUserFullDetailsById = async (id: string) => {
    return (await UserModel.findById(id))?.toJSON();
}

export const UserService = {
    getUserByFilter,
    getUserFullDetailsById,
    addUserAuth,
    addUserDetails
}
