/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request, NextFunction } from 'express';
class JsonValidator {
    public tryParseJSON = (err: any, req: Request, res: Response, next: NextFunction): any => {
        if (err.status === 400) {
            return res.status(err.status).json({
                status: err.status,
                error: 'Invalid JSON body',
            });
        }
        return next(err);
    };
}
export default new JsonValidator();
