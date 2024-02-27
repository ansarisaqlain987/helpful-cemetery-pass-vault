import { VaultModel } from "../models/vault.model"
import { UserVault } from "../types";
import { saveAndGetJsonValue } from "../utils/sanity.util";

const getVaultsByUserId = (id: string) => {
    return VaultModel.find({ userId: id })
}

const createVault = async (userId: string, vaultName: string = 'default') => {
    const doc = await VaultModel.create({ userId, name: vaultName, items: [] });
    return await saveAndGetJsonValue<UserVault>(doc);
}

export const VaultService = {
    getVaultsByUserId,
    createVault
}