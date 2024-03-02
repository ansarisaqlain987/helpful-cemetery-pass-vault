import { createClerkClient } from "@clerk/clerk-sdk-node";
import { APP_CONSTANTS } from "./constants";

export const clerkClient = createClerkClient({
    secretKey: APP_CONSTANTS.CLERK_SECRET
});