const asyncHandler = require('express-async-handler');

const Doctor = require('../models/Doctor');

// @desc Get all doctors
// @route GET /
// @access Public

const getAllDoctors = asyncHandler(async (req, res) => {
    const allDoctors = await Doctor
        .find()
        .populate('appointments')
        .lean();

    res.json(allDoctors);
});

module.exports = {
    getAllDoctors,
};