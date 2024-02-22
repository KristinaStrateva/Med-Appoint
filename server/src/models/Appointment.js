const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: [true, 'Appointment date is required!'],
        },
        time: {
            type: String,
            required: [true, 'Appointment hour is required!'],
        },
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

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;