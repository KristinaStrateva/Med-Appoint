const mongoose = require('mongoose');

const Appointment = require('./Appointment');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    medSpeciality: {
        type: String,
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