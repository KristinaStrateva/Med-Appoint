import express, { Router } from 'express';
import appointmentsController from '../controllers/appointmentsController';
import verifyJWT from '../middlewares/verifyJWT';

const router: Router = express.Router();

router.get('/appointments', verifyJWT, appointmentsController.getAllAppointmentsForADoc);

export default router;
