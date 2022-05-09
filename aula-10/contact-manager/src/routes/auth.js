const router = require('express').Router();
const createUserAction = require('../actions/auth/create-user.action');
const loginAction = require('../actions/auth/login.action')
const logoutAction = require('../actions/auth/logout.action')
const registerAction = require('../actions/auth/register.action');

router.get('/login', loginAction);
router.post('/login', () => { });

router.get('/register', () => registerAction);
router.post('/register', () => createUserAction);

router.get('/logout', () => logoutAction);

router.get('/profile', () => { });
router.post('/profile', () => { });

module.exports = router;