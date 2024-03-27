import { APP_CONSTANTS } from "../config/constants";
import { decryptRequestData } from "../services/security.service";
import { NextFunction, Request, Response } from "../types"

export const getSecurityMiddleware = () => {
    return (req: Request<{ data: any }>, res: Response, next: NextFunction) => {
        const localDev = APP_CONSTANTS.LOCAL_DEV
        if (!localDev) {
            const decryptedBody = req?.body?.data && decryptRequestData(req?.body?.data);
            if (decryptedBody) {
                req.body = { data: decryptedBody };
            }
        }
        next();
    }
}