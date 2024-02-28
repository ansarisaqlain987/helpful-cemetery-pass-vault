
interface Errors {
    inactiveUser: number;
    missingFirebaseToken: number;
}

export const ERROR_CODES: Errors = {
    inactiveUser: 401001,
    missingFirebaseToken: 400001,
}