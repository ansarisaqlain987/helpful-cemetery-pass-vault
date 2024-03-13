import { VaultModel } from "../models/vault.model"
import { UserVault } from "../types";
import { saveAndGetJsonValue } from "../utils/sanity.util";

const getVaultsByUserId = (uid: string, selectFields?: {[key in keyof Partial<UserVault>]: number}) => {
    const query = VaultModel.find({ uid });
    if(selectFields){
        return query.select(selectFields)
    }
    return query.exec();
}

const createVault = async (uid: string, vaultName: string = 'default') => {
    const doc = await VaultModel.create({ uid, name: vaultName, items: [] });
    return await saveAndGetJsonValue<UserVault>(doc);
}

export const VaultService = {
    getVaultsByUserId,
    createVault
}