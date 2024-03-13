import mongoose from "mongoose"
import { APP_CONSTANTS } from "./constants"
export const connectToDB = () => {
    mongoose.connect(APP_CONSTANTS.DB_URL);
    mongoose.connection.on('error', err => {
        console.log('Error connecting with DB');
    });
}