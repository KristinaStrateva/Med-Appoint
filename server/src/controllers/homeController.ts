import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Doctor, { DoctorDocument } from '../models/Doctor';
import Patient from '../models/Patient';

// @desc Get all doctors
// @route GET /
// @access Public

const getAllDoctors = asyncHandler(async (req: Request, res: Response) => {
    const allDoctors: DoctorDocument = await Doctor
        .find()
        .populate('appointments')
        .lean();

    const medSpecialities: DoctorDocument[] = await Doctor.aggregate([
        { $group: { _id: '$medSpeciality', doctor: { $first: '$$ROOT' } } },
        { $replaceRoot: { newRoot: '$doctor' } }
    ]);

    const patientsAmount = await Patient.countDocuments();

    res.json(
        {
            allDoctors,
            medSpecialities,
            patientsAmount
        }
    );
});

export default { getAllDoctors };
