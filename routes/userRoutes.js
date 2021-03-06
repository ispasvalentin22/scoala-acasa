const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.route('/').get(getAllUsers).post(createUser);
router.route('/currentUser').get(authController.protect, getCurrentUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
