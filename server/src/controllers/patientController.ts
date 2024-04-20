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

    const user = await Patient.findOne({ email }).populate('appointments');

    if (!user) {
        res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
        return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
        return;
    }

    const accessToken = await accessTokenGenerator(user);

    res.setHeader('Authorization', `Bearer ${accessToken}`);

    const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        accessToken,
    };

    res.status(200).json(userData);
});

// @desc Register new user
// @route POST users/register
// @access Private

const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;
    const result: Result = validationResult(req);
    const errors = result.array();

    if (errors.length !== 0) {
        res.status(400).json({ message: errors[0].msg });
        return;
    }

    const usernameExists = await Patient.findOne({ username }).lean();

    if (usernameExists) {
        res.status(409).json({ message: 'Username already exists!' });
        return;
    }

    const createdUser = await Patient.create({ username, email, password });

    if (!createdUser) {
        res.status(400).json({ message: 'Invalid user data received!' });
        return;
    }

    const accessToken = await accessTokenGenerator(createdUser);

    const userData = {
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        accessToken
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
