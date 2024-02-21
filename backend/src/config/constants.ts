
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
    DISABLE_ENCRYPTION: getBooleanValue(process.env.DISABLE_ENCRYPTION),
    FIREBASE_CREDS: getJsonValue(process.env.FIREBASE_CREDS)
}