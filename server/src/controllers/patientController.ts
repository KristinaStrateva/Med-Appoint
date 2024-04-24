import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { validationResult, Result } from 'express-validator';
import bcrypt from 'bcrypt';
import Patient from '../models/Patient';
import accessTokenGenerator from '../utils/tokenGenerator';

// @desc Sign in existing user
// @route POST /login
// @access Public

const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const result: Result = validationResult(req);
    const errors = result.array();

    if (errors.length !== 0) {
        res.status(400).json({ message: errors[0].msg });
        return;
    }

    const patient = await Patient.findOne({ email }).populate('appointments');

    if (!patient) {
        res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
        return;
    }

    const isValidPassword = await bcrypt.compare(password, patient.password);

    if (!isValidPassword) {
        res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
        return;
    }

    const accessToken = await accessTokenGenerator(patient);

    res.setHeader('Authorization', `Bearer ${accessToken}`);

    const patientData = {
        id: patient._id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        token: accessToken,
    };

    res.status(200).json(patientData);
});

// @desc Register new user
// @route POST users/register
// @access Private

const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, password, rePassword } = req.body;
    const result: Result = validationResult(req);
    const errors = result.array();

    if (errors.length !== 0) {
        res.status(400).json({ message: errors[0].msg });
        return;
    }

    if (password !== rePassword) {
        res.status(400).json({message: 'Passwords don\'t match!'});
        return;
    }

    const emailExists = await Patient.findOne({ email }).lean();

    if (emailExists) {
        res.status(409).json({ message: 'This email already exists!' });
        return;
    }

    const createdUser = await Patient.create({ firstName, lastName, email, password });

    if (!createdUser) {
        res.status(400).json({ message: 'Invalid user data received!' });
        return;
    }

    const accessToken = await accessTokenGenerator(createdUser);

    const userData = {
        id: createdUser._id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        token: accessToken
    };

    res.status(201).json(userData);
});

// @desc Logout an user
// @route POST /logout
// @access Public

const logout = (req: Request, res: Response) => {
    res.removeHeader('Authorization');

    res.json({
        message: 'Successfully logged out!'
    });
};

export default { login, register, logout };
