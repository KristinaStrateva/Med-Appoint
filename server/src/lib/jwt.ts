import jsonwebtoken, { SignOptions } from 'jsonwebtoken';

interface CustomJwt {
    sign: (payload: string | object | Buffer, secretOrPrivateKey: string | Buffer, options?: SignOptions) => Promise<string>;
    verify: (token: string, secretOrPublicKey: string | Buffer, options?: jsonwebtoken.VerifyOptions) => Promise<object | string>;
}

const jwt: CustomJwt = {
    sign: async (payload, secretOrPrivateKey, options) => Promise.resolve(jsonwebtoken.sign(payload, secretOrPrivateKey, options)),
    verify: async (token, secretOrPublicKey, options) => Promise.resolve(jsonwebtoken.verify(token, secretOrPublicKey, options)),
};

export default jwt;
