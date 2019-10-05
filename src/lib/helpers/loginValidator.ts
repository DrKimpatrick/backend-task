/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express';

import Joi from '@hapi/joi';

import Commons from './raiseError';

class ValidateAuth extends Commons {
    public login = async (req: Request, res: Response, next: NextFunction) => {
        const schema = Joi.object().keys({
            username: Joi.string()
                .required()
                .label('Username is required')
                .trim(),
            password: Joi.string()
                .trim()
                .required()
                .label('Password is required'),
        });

        const { error } = Joi.validate(req.body, schema, { abortEarly: false });

        await this.raiseError(error, res, next);
    };
}

export default new ValidateAuth();
