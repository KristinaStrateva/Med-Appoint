import express, { Router } from 'express';
import appointmentsController from '../controllers/appointmentsController';

const router: Router = express.Router();

router.get('/appointments', appointmentsController.getAllAppointmentsForADoc);

export default router;
