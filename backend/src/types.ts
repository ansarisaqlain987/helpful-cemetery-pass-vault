/**
 * Use types from this file only
 */

import { Request as ExpressRequest, Response as ExpressResponse, NextFunction as ExpressNextFunction, Router as ExpressRouter } from 'express';

export type Request = ExpressRequest;
export type Response<T = any> = ExpressResponse<T>;
export type NextFunction = ExpressNextFunction;
export type Router = ExpressRouter;
export type AppContext = {
    request: Request;
    response: Response;
    query?: { [key: string]: string },
    params?: { [key: string]: string },
    body?: any,
    headers?: { [key: string]: string },
    cookie: { [key: string]: string },
    setCookie: (name: string, value: any) => void
};
export type AppResponse = {
    status?: 200 | 201 | 203 | 204 | 400 | 401 | 402 | 403 | 404 | 500;
    data?: object | Array<any>;
    error?: Array<any>;
}
export type ControllerFunction = (ctx: AppContext) => AppResponse | Promise<AppResponse>