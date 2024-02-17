
const getBooleanValue = (key: string | undefined): boolean => {
    try {
        return key?.toLowerCase()?.trim() === "true";
    } catch (err) {
        return false;
    }
}

export const APP_CONSTANTS = {
    DISABLE_ENCRYPTION: getBooleanValue(process.env.DISABLE_ENCRYPTION),
}