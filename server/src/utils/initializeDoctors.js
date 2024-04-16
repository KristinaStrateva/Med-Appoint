const asyncHandler = require('express-async-handler');

const Doctor = require('../models/Doctor');

const initializeDoctors = asyncHandler(async () => {
    const existingDoctors = await Doctor.find();

    if (existingDoctors.length === 0) {
        await Doctor.create([
            { name: 'Dr. Peter Davidson', medSpeciality: 'Neurology' },
            { name: 'Dr. Paola Dhornan', medSpeciality: 'Pediatrics' },
            { name: 'Dr. Louise Parker', medSpeciality: 'General Practice/GP' },
            { name: 'Dr. George Brown', medSpeciality: 'Orthopedics' },
            { name: 'Dr. Bethany Rose', medSpeciality: 'Dermatology' },
            { name: 'Dr. David Noah', medSpeciality: 'Cardiology' },
        ]);
    }
});

module.exports = initializeDoctors;