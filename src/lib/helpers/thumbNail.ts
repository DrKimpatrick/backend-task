/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express';

import Joi from '@hapi/joi';

import Commons from './raiseError';

class ValidateThumbNail extends Commons {
    /*
        Use Joi to validate request body for image resizing
     */
    public validateUrl = async (req: Request, res: Response, next: NextFunction) => {
        const schema = Joi.object().keys({
            url: Joi.string()
                .uri()
                .trim()
                .required()
                .label('Url should be a valid url'),
        });

        const { error } = schema.validate(req.body, { abortEarly: false });

        await this.raiseError(error, res, next);
    };
}

export default new ValidateThumbNail();
