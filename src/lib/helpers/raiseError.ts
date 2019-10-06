/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, NextFunction } from 'express';

/**
    After Joi has validated it passes out errors in a non-friendly format
    we use the raiseErro method to to manupulate / convert it in a friendly format
    
    @Custom errors are in the label property
*/
class Commons {
    protected raiseError = (error: any, res: Response, next: NextFunction) => {
        return new Promise(() => {
            if (error) {
                const data: Record<string, any>[] = [];
                const { details } = error;
                details.forEach((detail: any) => {
                    const obj = { field: detail.path[0], msg: detail.context.label };
                    data.push(obj);
                });

                return res.status(400).json(data);
            } else {
                next();
            }
        });
    };
}

export default Commons;
