import { NextFunction, Request, Response } from "../types";

export const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).send({ message: "Not Found" })
}

export const defaultExceptionHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).send({ error: 'INTERNAL SERVER ERROR' })
}