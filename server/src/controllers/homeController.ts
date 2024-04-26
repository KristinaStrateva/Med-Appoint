import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Doctor, { DoctorDocument } from '../models/Doctor';

// @desc Get all doctors
// @route GET /
// @access Public

const getAllDoctors = asyncHandler(async (req: Request, res: Response) => {
    const allDoctors = await Doctor
        .find()
        .populate('appointments')
        .lean();

    const medSpecialities: DoctorDocument[] = await Doctor.aggregate([
        { $group: { _id: '$medSpeciality', doctor: { $first: '$$ROOT' } } },
        { $replaceRoot: { newRoot: '$doctor' } }
    ])

    res.json(
        {
            allDoctors,
            medSpecialities
        }
    );
});

export default { getAllDoctors };
