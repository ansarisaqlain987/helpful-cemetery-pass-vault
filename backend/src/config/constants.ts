import { getBooleanValue, getJsonValue, getStringValue } from "../utils/parser";

export const APP_CONSTANTS = {
    FIREBASE_CREDS: getJsonValue(process.env.FIREBASE_CREDS),
    LOCAL_DEV: getBooleanValue(process.env.LOCAL_DEV),
    SECRET: getStringValue(process.env.SECRET),
    SIGNED_SECRET: getStringValue(process.env.SIGNED_SECRET),
    CLERK_SECRET: getStringValue(process.env.CLERK_SECRET)
}