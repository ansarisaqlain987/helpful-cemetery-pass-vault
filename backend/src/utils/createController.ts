import { APP_CONSTANTS } from "../config/constants";
import { encryptResponseData } from "../services/security.service";
import { ControllerFunction, NextFunction, Request, Response } from "../types"

export const useController = (fn: ControllerFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const context = createContext(req, res);
            const data = await fn(context);
            const encryptedData = APP_CONSTANTS.LOCAL_DEV
                ? data.data
                : encryptResponseData(JSON.stringify(data.data ?? {}));

            return res.status(data.status || 200).send({ data: encryptedData, error: data.error });
        } catch (err) {
            next(err)
        }
    }
}

export const createContext = (req: Request, res: Response) => {
    const context = {
        request: req,
        response: res,
        query: req.query as { [key: string]: string },
        params: req.params,
        body: req.body,
        headers: req.headers as { [key: string]: string },
        cookie: req.cookies,
        setCookie: res.cookie
    }
    return context;
}