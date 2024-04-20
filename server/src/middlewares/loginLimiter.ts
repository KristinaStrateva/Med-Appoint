import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,     // Limit each IP to 5 login requests per 'window' per minute
    message: 'Too many login attempts from this IP, please try again after a 60 second pause',
    handler: (req: Request, res: Response, next: NextFunction) => {
        res.status(429).send('Too many requests!');
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export default loginLimiter;
