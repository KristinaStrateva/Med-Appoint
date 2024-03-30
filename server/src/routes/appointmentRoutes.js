const router = require('express').Router();

const appointmentsController = require('../controllers/appointmentsController');

router.get('/appointments', appointmentsController.getAllAppointmentsForADoc);

module.exports = router;