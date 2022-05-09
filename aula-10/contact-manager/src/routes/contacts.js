const router = require('express').Router();

const detailAction = require('../actions/contacts/detail.action');
const formAction = require('../actions/form.action');
const listAction = require('../actions/list.action');
const removeAction = require('../actions/remove.action');
const saveAction = require('../actions/save.action');

router.get('/', listAction);
router.get('/:id', detailAction);
router.get('/:id/form', formAction);
router.post('/:id/form', saveAction);
router.get('/:id/delete', removeAction);

module.exports = router;