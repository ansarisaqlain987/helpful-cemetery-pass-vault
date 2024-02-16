import { ControllerFunction, NextFunction, Request, Response } from "../types"

export const controller = (fn: ControllerFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const context = createContext(req, res);
            const data = await fn(context);

            // encrypt data
            return res.send(data)
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