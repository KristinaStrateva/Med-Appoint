const asyncHandler = require('express-async-handler');

const Doctor = require('../models/Doctor');

const initializeDoctors = asyncHandler(async () => {
    const existingDoctors = await Doctor.find();

    if (existingDoctors.length === 0) {
        await Doctor.create([
            { name: 'Dr. Peter Davidson', medSpeciality: 'General Practitioner/GP' },
            { name: 'Dr. Paola Dhornan', medSpeciality: 'Pediatrician' },
            { name: 'Dr. Louise Parker', medSpeciality: 'Ophthalmologist' },
            { name: 'Dr. George Brown', medSpeciality: 'Rheumatologist' },
            { name: 'Dr. Bethany Rose', medSpeciality: 'Ear, Nose and Throat/ENT' },
            { name: 'Dr. David Noah', medSpeciality: 'Cardiologist' },
        ]);
    }
});

module.exports = initializeDoctors;