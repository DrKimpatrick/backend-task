/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from 'express';
import JWT from '../helpers/jwt';
import jsonpatch from 'jsonpatch';

class Controller {
    public userLogin = (req: Request, res: Response): any => {
        return res.status(200).json({
            status: 200,
            token: JWT.token(),
        });
    };

    public jsonPatch = (req: Request, res: Response): any => {
        const { jsonObject, patchObject } = req.body;
        let patcheddoc: object;

        try {
            patcheddoc = jsonpatch.apply_patch(jsonObject, patchObject);
        } catch {
            return res.status(400).json({
                status: 400,
                error: 'Unable to patch',
            });
        }

        return res.status(200).json({
            status: 200,
            patcheddoc,
        });
    };
}

export default new Controller();
