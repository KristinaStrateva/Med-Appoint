import jwt from '../lib/jwt';
import { RequestHandler, Request } from 'express';

interface CustomRequest extends Request {
    user?: any;
}

const ACCESS_TOKEN_SECRET: string | undefined = process.env.ACCESS_TOKEN_SECRET;

const verifyJWT: RequestHandler = async (req: CustomRequest, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization as string;

    if (!authHeader?.startsWith('Bearer ')) {
        delete req.headers['Authorization'] || delete req.headers['authorization'];
        console.log('Token is missing!')
        return res.status(401).json({ message: 'Token is missing!' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = await jwt.verify(token, ACCESS_TOKEN_SECRET as string);
        const userInfo = decoded;

        req.user = userInfo; // req.user = { _id, username, email }

        next();

    } catch (error: any) {
        delete req.headers['Authorization'] || delete req.headers['authorization'];

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired!' });
        } else {
            console.log(error.name)
            console.log('Problem with token verification!')
            return res.status(403).json({ message: 'Problem with token verification!' });
        }
    }
};

export default verifyJWT;
