import { APP_CONSTANTS } from "../config/constants";
import { decryptRequestData } from "../services/security.service";
import { NextFunction, Request, Response } from "../types"

export const getSecurityMiddleware = () => {
    return (req: Request<{ data: any }>, res: Response, next: NextFunction) => {
        const localDev = APP_CONSTANTS.LOCAL_DEV
        if (!localDev) {
            const decryptedBody = decryptRequestData(req?.body?.data);
            req.body = { data: decryptedBody };
        }
        next();
    }
}