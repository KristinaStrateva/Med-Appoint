const router = require('express').Router();

const patientController = require('../controllers/patientController');
const { loginValidation, registerValidation } = require('../middlewares/patientValidator');
const loginLimiter = require('../middlewares/loginLimiter');

router.post('/login', loginValidation, loginLimiter, patientController.login);
router.post('/register', registerValidation, patientController.register);
router.post('/logout', patientController.logout);

module.exports = router;