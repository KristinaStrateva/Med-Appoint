import express, { Router } from 'express';
import patientController from '../controllers/patientController';
import validations from '../middlewares/patientValidator';
import loginLimiter from '../middlewares/loginLimiter';

const router: Router = express.Router();

router.post('/login', validations.loginValidation, loginLimiter, patientController.login);
router.post('/register', validations.registerValidation, patientController.register);

export default router;
