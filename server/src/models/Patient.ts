import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import Appointment from './Appointment';

interface IPatient extends Document {
    email: string;
    name: string;
    password: string;
    appointments: mongoose.Types.ObjectId[];
}

const patientSchema: Schema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    appointments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Appointment',
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
