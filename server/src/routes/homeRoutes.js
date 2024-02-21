const router = require('express').Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.getAllDoctors);

module.exports = router;