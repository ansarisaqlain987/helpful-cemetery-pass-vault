import { ERROR_CODES } from "../config/errorCodes";
import { UserService } from "../services/user.service";
import { VaultService } from "../services/vault.service";
import { AppContext, AppResponse, ControllerFunction, UserDetails } from "../types";
import { sanitizeObject } from "../utils/sanity.util";

interface LoginProps {
    uid: string;
    email: string;
}
const login: ControllerFunction = async (ctx: AppContext<LoginProps>): Promise<AppResponse> => {

    const uid = ctx.body?.uid ?? '';
    const email = ctx.body?.email ?? '';
    const user = await UserService.getUserByFilter({ email, uid });

    const data: { userDetails: object, key: string, vaults: any[], } = {
        userDetails: {},
        key: '',
        vaults: []
    }

    if (user) {
        if (!user.active) {
            return {
                status: 401,
                errorCode: ERROR_CODES.inactiveUser,
                error: ['User is inactive']
            }
        }
        const userDetails = await UserService.getUserFullDetailsById(user.id ?? '');
        const vaults = VaultService.getVaultsByUserId(user.id ?? '');

        data.key = user.vaultKey;
        data.vaults = vaults as unknown as any[];
        data.userDetails = {
            email: user.email,
            uid: user.uid,
            id: user.id,
            firstName: userDetails?.firstName,
            lastName: userDetails?.lastName,
            alternateEmail: userDetails?.alternateEmail,
            countryCode: userDetails?.countryCode,
            contactNumber: userDetails?.contactNumber
        }
    } else {
        const userAuthDoc = await UserService.addUserAuth({ email, uid });
        const userDetails = await UserService.addUserDetails({
            firstName: "",
            lastName: "",
            userId: userAuthDoc.id ?? '',
            alternateEmail: "",
            contactNumber: "",
            countryCode: ""
        });
        const vault = await VaultService.createVault(userAuthDoc.id ?? '');

        data.key = userAuthDoc.vaultKey;
        data.vaults = [vault]
        data.userDetails = {
            email: userAuthDoc.email,
            uid: userAuthDoc.uid,
            id: userAuthDoc.id,
            firstName: userDetails?.firstName,
            lastName: userDetails?.lastName,
            alternateEmail: userDetails?.alternateEmail,
            countryCode: userDetails?.countryCode,
            contactNumber: userDetails?.contactNumber
        }
    }
    return {
        status: 200,
        data: {
            ...data,
        }
    }
}

const updateUser: ControllerFunction = async (ctx: AppContext<Partial<UserDetails>>): Promise<AppResponse> => {
    const body = ctx.body as Partial<UserDetails>;
    const obj = sanitizeObject(body);
    const doc = await UserService.updateUserDetails('', obj);
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