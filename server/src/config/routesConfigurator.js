const homeRouter = require('../routes/homeRoutes');
const patientRouter = require('../routes/patientRoutes');
const appointmentRouter = require('../routes/appointmentRoutes');
const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/patients', patientRouter);
    app.use('/schedule', appointmentRouter);
    app.use(errorHandler);
}