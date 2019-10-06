const router = require('express').Router();
import Auth from '../controllers/auth';
import AuthValidator from '../helpers/loginValidator';

router.route('/login').post(AuthValidator.login, Auth.userLogin);

export default router;
