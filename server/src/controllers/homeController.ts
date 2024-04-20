import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Doctor from '../models/Doctor';

// @desc Get all doctors
// @route GET /
// @access Public

const getAllDoctors = asyncHandler(async (req: Request, res: Response) => {
    const allDoctors = await Doctor
        .find()
        .populate('appointments')
        .lean();

    res.json(allDoctors);
});

export default { getAllDoctors };
