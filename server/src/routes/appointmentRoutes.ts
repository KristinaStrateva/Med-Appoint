import express, { Router } from 'express';
import appointmentsController from '../controllers/appointmentsController';
import verifyJWT from '../middlewares/verifyJWT';

const router: Router = express.Router();

router.get('/', verifyJWT, appointmentsController.getAllAppointmentsForADoc);
router.post('/add', appointmentsController.addAppointment);

export default router;
