/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express';

import Joi from '@hapi/joi';

import Commons from './raiseError';

class ValidatePatch extends Commons {
    public jsonPatch = async (req: Request, res: Response, next: NextFunction) => {
        const schema = Joi.object().keys({
            jsonObject: Joi.object()
                .required()
                .label('jsonObject should be an object and is required'),
            patchObject: Joi.object()
                .required()
                .label('patchObject should be an object and is required'),
        });

        const { error } = schema.validate(req.body, { abortEarly: false });

        await this.raiseError(error, res, next);
    };
}

export default new ValidatePatch();
