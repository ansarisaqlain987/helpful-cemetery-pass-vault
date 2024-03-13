import { VaultService } from "../services/vault.service";
import { AppContext, AppResponse, ControllerFunction } from "../types";

const getVaultsByUserId: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const {auth} = ctx;
    return {
        status: 200,
        data: []
    }
}

const getVaultById: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    return {
        status: 200,
        data: []
    }
}

const createVaultWithoutItems: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    return {
        status: 200,
        data: []
    }
}

const updateVault: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    return {
        status: 200,
        data: []
    }
}

export default {
    getVaultById,
    getVaultsByUserId,
    createVaultWithoutItems,
    updateVault
}