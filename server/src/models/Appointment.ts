import mongoose, { Schema, Document } from 'mongoose';

export interface AppointmentDocument extends Document {
    date: string;
    time: string;
    reason: string;
}

const appointmentSchema: Schema = new Schema(
    {
        date: {
            type: String,
            required: [true, 'Date for appointment is required!'],
        },
        time: [
            {
                type: String,
                required: [true, 'Time for appointment is required!'],
            }
        ],
        reason: {
            type: String,
            required: [true, 'Reason for appointment is required!'],
            minLength: [5, 'Reason must be at least 5 characters!'],
            maxLength: [50, 'Reason must not be more than 50 characters!'],
        },
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model<AppointmentDocument>('Appointment', appointmentSchema);

export default Appointment;
