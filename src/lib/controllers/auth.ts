/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import JWT from '../helpers/jwt';
class Auth {
    public userLogin = (req: Request, res: Response): any => {
        return res.status(200).json({
            status: 200,
            token: JWT.token(),
        });
    };
}

export default new Auth();
