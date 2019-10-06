const router = require('express').Router();
import Controller from '../controllers';
import AuthValidator from '../helpers/loginValidator';
import PatchValidator from '../helpers/jsonPatch';
import ThumbNailValidator from '../helpers/thumbNail';
import JWT from '../helpers/jwt';

/**
    POST /login user
    Validate request body and login user
    @param { string } username - username of the user
    @param { string } password - password of the user
 */
router.route('/login').post(AuthValidator.login, Controller.userLogin);

/**
    POST /patch Json object
    @param { object } jsonObject - Json object to be patched
    @param { array } jsonPatch - An array of patch commands
 */
router.route('/patch').post(JWT.verifyToken, PatchValidator.jsonPatch, Controller.jsonPatch);

/**
    Resize image
    @param { string } url - URL of a public image
 */
router.route('/thumb/nail').post(JWT.verifyToken, ThumbNailValidator.validateUrl, Controller.thumbNail);

export default router;
