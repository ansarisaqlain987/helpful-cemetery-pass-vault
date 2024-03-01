import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'
import { APP_CONSTANTS } from './constants';

const serviceAccount = APP_CONSTANTS.FIREBASE_CREDS;

if (!serviceAccount) {
    console.log("Please provide firebase credentials");
    process.exit(0)
}
const admin = initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
})

export const getFirebaseApp = () => admin;
export const getFirebaseAuth = () => getAuth(admin);