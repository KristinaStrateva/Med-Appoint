import express, { Router } from 'express';
import homeController from '../controllers/homeController';

const router: Router = express.Router();

router.get('/', homeController.getAllDoctors);

export default router;
