import { body } from 'express-validator';
import { RequestHandler } from 'express';

const loginValidation: RequestHandler[] = [
    body('email')
        .notEmpty()
        .withMessage('Email is required!')
        .toLowerCase()
        .trim()
        .isEmail()
        .withMessage('Incorrect email address!'),
    body('password')
        .notEmpty()
        .withMessage('Password is required!')
        .trim(),
];

const registerValidation: RequestHandler[] = [
    body('firstName')
        .notEmpty()
        .withMessage('First Name is required!')
        .toLowerCase()
        .trim(),
    body('lastName')
        .notEmpty()
        .withMessage('Last Name is required!')
        .toLowerCase()
        .trim(),
    body('email')
        .notEmpty()
        .withMessage('Email is required!')
        .toLowerCase()
        .trim()
        .isEmail()
        .withMessage('Incorrect email address!'),
    body('password')
        .notEmpty()
        .withMessage('Password is required!')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters!')
        .matches(/^(?=.*\d)(?=.*[A-Z]).+$/)
        .withMessage('Password must contain at least 1 Capital letter and 1 digit!'),
    body('rePassword')
        .notEmpty()
        .withMessage('Repeated password is required!')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Repeated password must be at least 8 characters!')
        .matches(/^(?=.*\d)(?=.*[A-Z]).+$/)
        .withMessage('Repeated password must contain at least 1 Capital letter and 1 digit!'),
];

export default { loginValidation, registerValidation };
