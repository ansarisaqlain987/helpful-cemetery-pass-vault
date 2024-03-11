/**
 * Use types from this file only
 */

import { Request as ExpressRequest, Response as ExpressResponse, NextFunction as ExpressNextFunction, Router as ExpressRouter } from 'express';

export type Request<Body = any> = ExpressRequest<{ [key: string]: string; } | undefined, null, Body>;
export type Response<T = any> = ExpressResponse<T>;
export type WithAuth<T=Request> = T & {auth: Auth}
export type NextFunction = ExpressNextFunction;
export type Router = ExpressRouter;
export type Auth = {
    uid: string;
    email: string;
}
export type AppContext<TReqBody = any, TResBody = any> = {
    auth?: Auth;
    request: Request<TReqBody>;
    response: Response<TResBody>;
    query?: { [key: string]: string },
    params?: { [key: string]: string },
    body?: TReqBody,
    headers?: { [key: string]: string },
    cookie: { [key: string]: string },
    setCookie: (name: string, value: any) => void
};
export type AppResponse = {
    status?: 200 | 201 | 203 | 204 | 400 | 401 | 402 | 403 | 404 | 500;
    data?: object | Array<any>;
    errorCode?: number;
    error?: Array<any>;
}
export type ControllerFunction = (ctx: AppContext) => AppResponse | Promise<AppResponse>

// Schema Types
export type UserAuth = {
    id?: string;
    uid: string;
    email: string;
    vaultKey: string;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export type UserDetails = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    alternateEmail: string;
    contactNumber: string;
    countryCode: string;
    createdAt?: string;
    updatedAt?: string;
}

export type VaultItem = {
    id?: string;
    vaultId: string;
    name: string;
    secret: string;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export type UserVault = {
    id?: string;
    userId: string;
    name: string;
    active: boolean;
    items: string[];
    createdAt?: string;
    updatedAt?: string;
}