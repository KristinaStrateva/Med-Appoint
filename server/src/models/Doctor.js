const mongoose = require('mongoose');

const Appointment = require('./Appointment');

const doctorSchema = new mongoose.Schema({
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
            ref: Appointment,
        }
    ]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;