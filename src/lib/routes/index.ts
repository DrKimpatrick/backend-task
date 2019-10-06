const router = require('express').Router();
import Controller from '../controllers';
import AuthValidator from '../helpers/loginValidator';
import PatchValidator from '../helpers/jsonPatch';
import JWT from '../helpers/jwt';

router.route('/login').post(AuthValidator.login, Controller.userLogin);
router.route('/patch').post(JWT.verifyToken, PatchValidator.jsonPatch, Controller.jsonPatch);

export default router;
