const router = require('express').Router();
const { verifyAuth } = require('../security')
const authRoutes = require('./auth')
const contactsRoutes = require('./contacts')

router.use(verifyAuth)

router.get('/', (_, res) => res.redirect('/contacts'));

router.use('/auth', authRoutes)
router.use('/contacts', contactsRoutes)


module.exports = router;