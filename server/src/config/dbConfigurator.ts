import dotenv from 'dotenv';
import mongoose from 'mongoose';
import initializeDoctors from '../utils/initializeDoctors';

dotenv.config();

const uri: string | undefined = process.env.MONGO_URI;

async function dbConnect(): Promise<void> {
    try {
        if (!uri) {
            throw new Error('MongoDB URI not found in environment variables.');
        }

        await mongoose.connect(uri);

        initializeDoctors();

    } catch (err) {
        if (err instanceof Error) {
            console.error(`DB Error: ${err}`);
            console.error(err.message);
        } else {
            console.error('An unknown error occurred:', err);
        }
        process.exit(1);
    }
}

export default dbConnect;
