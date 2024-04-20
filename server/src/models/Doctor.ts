import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { AppointmentDocument } from './Appointment';

export interface DoctorDocument extends Document {
    name: string;
    medSpeciality: 'General Practice/GP' | 'Pediatrics' | 'Orthopedics' | 'Neurology' | 'Cardiology' | 'Dermatology';
    appointments: ObjectId[] | AppointmentDocument[];
}

const doctorSchema: Schema = new Schema({
    name: {
        type: String,
    },
    medSpeciality: {
        type: String,
        enum: ['General Practice/GP', 'Pediatrics', 'Orthopedics', 'Neurology', 'Cardiology', 'Dermatology']
    },
    appointments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Appointment',
        }
    ]
});

const Doctor = mongoose.model<DoctorDocument>('Doctor', doctorSchema);

export default Doctor;
