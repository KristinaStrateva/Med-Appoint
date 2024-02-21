const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');

const PORT = process.env.PORT || 3500;

const app = express();

expressConfigurator(app);

