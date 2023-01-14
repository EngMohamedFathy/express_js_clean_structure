const router = require('express').Router();

// Import Controllers
const userController = require('../../../controllers/admin/userController')

// Import Validators
const userValidator = require('../../../validators/userValidator')

// Routes Actions
router.get('/',userController.getIndex)
router.get('/:id',userController.getUser)
router.post('',userValidator.add,userController.createUser)
router.put('/:id',userValidator.update,userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router
