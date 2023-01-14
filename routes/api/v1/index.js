const router = require('express').Router();

// Import Controllers
const indexController = require('../../../controllers/admin/indexController')

// Routes Actions
router.get('/',indexController.getIndex)

module.exports = router
