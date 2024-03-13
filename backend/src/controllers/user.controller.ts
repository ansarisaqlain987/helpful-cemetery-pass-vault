import { randomBytes } from "crypto";
import { UserService } from "../services/user.service";
import { VaultService } from "../services/vault.service";
import { AppContext, AppResponse, ControllerFunction, HTTPStatus } from "../types";
import { CustomError } from "../utils/customError";
import { validateObject } from "../utils/sanity.util";
import { UpdateUserInput, UpdateUserSchema } from "../zod/schema";

const login: ControllerFunction = async (ctx: AppContext): Promise<AppResponse> => {
    const { email = '', uid = '' } = ctx.auth ?? {};
    const user = await UserService.getUserByFilter({ email, uid });

    let response: { userDetails: object, key: string, vaults: any[], };
    let status: HTTPStatus;

    if (user) {
        if (!user.active) {
            throw new CustomError(401, ['User is inactive']);
        }
        
        const userDetails = user;
        const vaults = await VaultService.getVaultsByUserId(user.id ?? '', { id: 1, name: 1, active: 1, items: 1 });
        console.log('\n\n\nHERE\n\n\n', vaults)
        status = 200
        response = {
            key: user.vaultKey,
            vaults: vaults as unknown as any[],
            userDetails: {
                email: user.email,
                id: user.id,
                firstName: userDetails?.firstName,
                lastName: userDetails?.lastName,
                alternateEmail: userDetails?.alternateEmail,
                countryCode: userDetails?.countryCode,
                contactNumber: userDetails?.contactNumber
            }
        }
    } else {
        const userDetails = await UserService.addUserDetails({
            firstName: "",
            lastName: "",
            uid,
            email,
            vaultKey: randomBytes(128).toString('hex'),
            alternateEmail: "",
            contactNumber: "",
            countryCode: "",
            active: true
        });
        const vault = await VaultService.createVault(userDetails.id ?? '');

        status = 201
        response = {
            key: userDetails.vaultKey,
            vaults: [{ name: vault.name, active: vault.active, items: vault.items, id: vault.id }],
            userDetails: {
                email: userDetails.email,
                id: userDetails.id,
                firstName: userDetails?.firstName,
                lastName: userDetails?.lastName,
                alternateEmail: userDetails?.alternateEmail,
                countryCode: userDetails?.countryCode,
                contactNumber: userDetails?.contactNumber
            }
        }
    }
    return { status, data: response }
}

const updateUser: ControllerFunction = async (ctx: AppContext<UpdateUserInput>): Promise<AppResponse> => {
    const { body, auth } = ctx;
    const { success, error, data: obj } = validateObject(UpdateUserSchema, body);
    if (!success) {
        throw new CustomError(400, error);
    }
    const doc = await UserService.updateUserDetails(auth?.uid ?? '', obj);
    return {
        status: 200,
        data: {
            userDetails: {
                firstName: doc?.firstName,
                lastName: doc?.lastName,
                alternateEmail: doc?.alternateEmail,
                countryCode: doc?.countryCode,
                contactNumber: doc?.contactNumber
            }
        }
    }
}

export default {
    login,
    updateUser
}