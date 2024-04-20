import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import corsOptions from './corsOptions';
import logger from '../middlewares/logger';

dotenv.config();

function expressConfigurator(app: Express): void {
    console.log(`Node.js execution mode: ${process.env.NODE_ENV}`);

    app.use(logger);
    app.use(cors(corsOptions));
    app.use(express.static('public', {
        setHeaders: (res: Response, path: string, stat: any) => {
            if (path.endsWith('.js')) {
                res.set('Content-Type', 'application/javascript');
            }
        }
    }));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
}

export default expressConfigurator;
