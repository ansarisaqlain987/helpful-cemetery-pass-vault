import { ERROR_CODES } from "../config/errorCodes";
import { UserService } from "../services/user.service";
import { VaultService } from "../services/vault.service";
import { AppContext, AppResponse, ControllerFunction } from "../types";
import { CustomError } from "../utils/customError";
import { validateObject } from "../utils/sanity.util";
import { CreateOrUpdateVaultItemInput, CreateOrUpdateVaultItemInputSchema, CreateVaultInput, CreateVaultInputSchema } from "../zod/schema";

const getVaultsByUserId: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {auth} = ctx;
    const user = await UserService.getUserFromUID(auth?.uid ?? '');
    if(!user){
        throw new CustomError(401, ['User does not exist'], ERROR_CODES.userNotExist)
    }
    const vaults = await VaultService.getVaultsByUserId(user?._id.toString() ?? '', {name: 1, active: 1, items: 1, id: 1});
    return {
        data: vaults
    }
}

const getVaultById: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {params} = ctx;
    const id = params?.id ?? ''
    const vault = await VaultService.getVaultById(id, {name: 1, active: 1, items: 1, id: 1});
    if(vault === null){
        throw new CustomError(204, [], ERROR_CODES.vaultNotExist)
    }
    return {
        data: vault
    }
}

const createVaultWithoutItems: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {auth, body} = ctx;
    const {success, error, data} = validateObject<CreateVaultInput>(CreateVaultInputSchema, body);
    if(!success){
        throw new CustomError(400, error);
    }
    const vault = await VaultService.createVault(auth?.uid ?? '', data?.name);
    return {
        status: 201,
        data: vault
    }
}

const updateVaultName: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {body, params} = ctx;
    const {success, error, data} = validateObject<CreateVaultInput>(CreateVaultInputSchema, body);
    if(!success){
        throw new CustomError(400, error);
    }
    const vault = await VaultService.updateVault(params?.id ?? '', data, {name: 1, active: 1, items: 1, id: 1});
    return {
        data: vault
    }
}

const updateItems: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {body, params} = ctx;
    const {success, error, data} = validateObject<CreateOrUpdateVaultItemInput>(CreateOrUpdateVaultItemInputSchema, body);
    if(!success){
        throw new CustomError(400, error);
    }
    const vault = await VaultService.updateVault(params?.id ?? '', data, {name: 1, active: 1, items: 1, id: 1});
    return {
        data: vault
    }
}

export default {
    getVaultById,
    getVaultsByUserId,
    createVaultWithoutItems,
    updateVaultName,
    updateItems
}