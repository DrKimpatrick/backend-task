/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

class JWT {
    private SECRETE_KEY: any = 'hehefdhdefhefehfeyteeftegte';
    /**
        Create token for users
        @params { none }
        
    */
    public token = () => {
        const token = jwt.sign({}, this.SECRETE_KEY, { expiresIn: '24h' });
        return token;
    };

    /**
        @params { req, res, next } from express
     */
    public verifyToken = (req: Request, res: Response, next: NextFunction) => {
        const token: any = req.headers['x-access-token'] || req.headers.authorization;
        if (!token) {
            return res.status(401).json({ status: 401, message: 'No token provided.' });
        }
        jwt.verify(token, this.SECRETE_KEY, (err: any) => {
            if (err) {
                return res.status(401).json({ status: 401, message: 'Failed to authenticate token.' });
            }
        });
        next();
    };
}

export default new JWT();
