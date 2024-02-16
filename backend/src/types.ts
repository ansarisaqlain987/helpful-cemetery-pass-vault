/**
 * Use types from this file only
 */

import { Request as ExpressRequest, Response as ExpressResponse, NextFunction as ExpressNextFunction, Router as ExpressRouter } from 'express';

export type Request = ExpressRequest;
export type Response = ExpressResponse;
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
export type ControllerFunction = (ctx: AppContext) => object | Promise<object>