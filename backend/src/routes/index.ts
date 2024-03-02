import { NextFunction, Request, Response } from "../types";

export const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).send({ message: "Not Found" })
}

export const defaultExceptionHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err?.message?.toString()?.toLowerCase() === 'unauthenticated') {
        return res.status(401).send({ status: 401, error: 'Unauthorized' })
    }
    return res.status(500).send({ error: 'INTERNAL SERVER ERROR' })
}