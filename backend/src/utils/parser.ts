export const getBooleanValue = (key: string | undefined): boolean => {
    try {
        return key?.toLowerCase()?.trim() === "true";
    } catch (err) {
        return false;
    }
}

export const getJsonValue = (data: string | undefined): object | null => {
    try {
        return data && JSON.parse(data) || null;
    } catch (err) {
        return null
    }
}

export const getStringValue = (data: any): string => {
    try {
        return String(data);
    } catch (err) {
        return ''
    }
}