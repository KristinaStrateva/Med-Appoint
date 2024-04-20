// import asyncHandler from 'express-async-handler';

import Doctor from '../models/Doctor';

const initializeDoctors = async () => {
    const existingDoctors = await Doctor.find();

    if (existingDoctors.length === 0) {
        await Doctor.create([
            { name: 'Dr. Louise Parker', medSpeciality: 'General Practice/GP' },
            { name: 'Dr. Megan Burnet', medSpeciality: 'General Practice/GP' },
            { name: 'Dr. Peter Strong', medSpeciality: 'General Practice/GP' },
            { name: 'Dr. Paola Dhornan', medSpeciality: 'Pediatrics' },
            { name: 'Dr. Linda Murray', medSpeciality: 'Pediatrics' },
            { name: 'Dr. George Brown', medSpeciality: 'Orthopedics' },
            { name: 'Dr. Peter Davidson', medSpeciality: 'Neurology' },
            { name: 'Dr. Sarah Silverstone', medSpeciality: 'Neurology' },
            { name: 'Dr. David Noah', medSpeciality: 'Cardiology' },
            { name: 'Dr. Bill James', medSpeciality: 'Cardiology' },
            { name: 'Dr. Bethany Rose', medSpeciality: 'Dermatology' },
            { name: 'Dr. Linsey Williams', medSpeciality: 'Dermatology' },
            { name: 'Dr. Bob Grey', medSpeciality: 'Dermatology' },
            { name: 'Dr. Mariah Susane', medSpeciality: 'Dermatology' },
        ]);
    }
};

export default initializeDoctors;