
const getBooleanValue = (key: string | undefined): boolean => {
    try {
        return key?.toLowerCase()?.trim() === "true";
    } catch (err) {
        return false;
    }
}

const getJsonValue = (data: string | undefined): object | null => {
    try {
        return data && JSON.parse(data) || null;
    } catch (err) {
        return null
    }
}

export const APP_CONSTANTS = {
    FIREBASE_CREDS: getJsonValue(process.env.FIREBASE_CREDS),
    LOCAL_DEV: getBooleanValue(process.env.LOCAL_DEV)
}