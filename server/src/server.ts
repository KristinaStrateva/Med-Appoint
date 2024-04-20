import express from 'express';
import mongoose from 'mongoose';

import dbConnect from './config/dbConfigurator';
import expressConfigurator from './config/expressConfigurator';
import routesConfigurator from './config/routesConfigurator';

const PORT = process.env.PORT || 3500;

const app = express();

dbConnect();
expressConfigurator(app);
routesConfigurator(app);

mongoose.connection.once('open', () => {
    console.log('DB connected successfully!');

    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
});

mongoose.connection.on('error', err => console.log(err));