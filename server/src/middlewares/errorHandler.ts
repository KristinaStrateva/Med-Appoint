import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.log(err.stack);

    const status = res.statusCode ? res.statusCode : 500; // server error

    res.status(status);

    res.json({ message: err.message });
};

export default errorHandler;
