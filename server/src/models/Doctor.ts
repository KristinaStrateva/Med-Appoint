import mongoose, { Schema, Document } from 'mongoose';

export interface DoctorDocument extends Document {
    name: string;
    medSpeciality: 'General Practice/GP' | 'Pediatrics' | 'Orthopedics' | 'Neurology' | 'Cardiology' | 'Dermatology';
    appointments: Record<string, string[]>;
}

const doctorSchema: Schema = new Schema({
    name: {
        type: String,
    },
    medSpeciality: {
        type: String,
        enum: ['General Practice/GP', 'Pediatrics', 'Orthopedics', 'Neurology', 'Cardiology', 'Dermatology']
    },
    imageUrl: {
        type: String,
    },
    appointments: {
        type: Schema.Types.Mixed,
        default: {},
    }
});

const Doctor = mongoose.model<DoctorDocument>('Doctor', doctorSchema);

export default Doctor;
