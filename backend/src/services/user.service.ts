import { UserModel } from "../models/user.model";
import { UserDetails } from "../types";
import { sanitizeObject } from "../utils/sanity.util";


const addUserDetails = async (inputs: Pick<UserDetails, 'firstName' | 'lastName' | 'uid' | 'email' | 'active' | 'vaultKey' | 'alternateEmail' | 'contactNumber' | 'countryCode'>) => {
    const doc = await UserModel.create(inputs);
    const returnDoc = await doc.save();
    return returnDoc.toJSON();
}

const getUserByFilter = async (filter: Partial<UserDetails>) => {
    const queryFilter: Partial<UserDetails> = sanitizeObject(filter as any);
    return (await UserModel.findOne({ ...queryFilter }))?.toJSON()
}

const getUserFullDetailsById = async (id: string) => {
    return (await UserModel.findById(id))?.toJSON();
}

const updateUserDetails = async (userid: string, inputs: Partial<UserDetails>) => {
    const doc = await UserModel.findOneAndUpdate({ userId: userid }, { ...inputs }, { new: true });
    return doc?.toJSON();
}

export const UserService = {
    getUserFullDetailsById,
    addUserDetails,
    updateUserDetails,
    getUserByFilter
}
