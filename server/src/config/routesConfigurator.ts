import { Express } from 'express';
import homeRouter from '../routes/homeRoutes';
import patientRouter from '../routes/patientRoutes';
import appointmentRouter from '../routes/appointmentRoutes';
import errorHandler from '../middlewares/errorHandler';

export default function configureRoutes(app: Express): void {
    app.use(homeRouter);
    app.use('/patients', patientRouter);
    app.use('/appointments', appointmentRouter);
    app.use(errorHandler);
}
