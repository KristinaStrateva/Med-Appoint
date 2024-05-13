import jwt from '../lib/jwt';

const ACCESS_TOKEN_SECRET: string | undefined = process.env.ACCESS_TOKEN_SECRET;

export interface DecodedToken {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
};

const accessTokenGenerator = async (user: any): Promise<string | undefined> => {
    const payload: DecodedToken = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };

    if (!ACCESS_TOKEN_SECRET) {
        throw new Error('Access token secret is not defined!');
    }

    const token = await jwt.sign({ payload }, ACCESS_TOKEN_SECRET, { expiresIn: '2d' });

    return token;
};

export default accessTokenGenerator;
