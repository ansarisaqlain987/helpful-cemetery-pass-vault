import { APP_CONSTANTS } from "../config/constants";
import { decryptRequestData } from "../services/security.service";
import { NextFunction, Request, Response } from "../types"

export const getSecurityMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const disableEncryption = APP_CONSTANTS.DISABLE_ENCRYPTION
        if (!disableEncryption && req.method !== 'GET') {
            // decrypt body
            // re-assign body
            const body = req.body;
            const decryptedBody = decryptRequestData(body?.data);
            req.body = { data: decryptedBody };
        }
        next();
    }
}