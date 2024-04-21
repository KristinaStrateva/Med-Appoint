import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import Appointment from './Appointment';

interface IPatient extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    appointments: mongoose.Types.ObjectId[];
}

const patientSchema: Schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    appointments: [
        {
            type: mongoose.Types.ObjectId,
            ref: Appointment,
        }
    ]
});

patientSchema.virtual('rePassword')
    .set(function (this: IPatient, value: string) {
        if (value !== this.password) {
            throw new Error('Passwords don\'t match!');
        }
    });

patientSchema.pre<IPatient>('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const Patient = mongoose.model<IPatient>('Patient', patientSchema);

export default Patient;
