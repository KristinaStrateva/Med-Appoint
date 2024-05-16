import mongoose, { Schema, Document } from 'mongoose';

export interface AppointmentDocument extends Document {
    date: string;
    time: string;
    reason: string;
}

const dateSchema: Schema = new Schema(
    {
        day: String,
        month: String,
        year: String
    }
);

const timeSchema: Schema = new Schema(
    {
        hour: String,
        minutes: String
    }
)

const appointmentSchema: Schema = new Schema(
    {
        date: {
            type: mongoose.Types.ObjectId,
            ref: 'dateSchema'
        },
        time: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'timeSchema'
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
