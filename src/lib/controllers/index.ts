/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from 'express';
import JWT from '../helpers/jwt';
import jsonpatch from 'jsonpatch';
const imageThumbnail = require('image-thumbnail');

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

    public thumbNail = async (req: Request, res: Response): Promise<any> => {
        const { url } = req.body;
        const options = { width: 50, height: 50, responseType: 'base64' };
        let thumbnail: any;

        try {
            thumbnail = await imageThumbnail({ uri: url }, options);
        } catch (err) {
            return res.status(500).json({
                status: 500,
                error: `Something wrong happened during the request ${err}`,
            });
        }
        return res.status(200).json({
            status: 200,
            thumbnail,
        });
    };
}

export default new Controller();
