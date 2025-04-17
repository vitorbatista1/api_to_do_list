const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {
  validateCreateUser,
  validateLoginUser
} = require('../validations/user.validation');

router.post('/login', validateLoginUser, userController.loginUser);
router.post('/newUser', validateCreateUser, userController.createUser);


router.use(authMiddleware);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;
