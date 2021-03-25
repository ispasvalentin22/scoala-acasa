const express = require('express');
const {
  getAllClasses,
  getClass,
  createClass,
  deleteClass,
  updateClass,
} = require('../controllers/classController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, getAllClasses)
  .post(authController.protect, authController.restrictTo('Profesor'), createClass);

router.route('/:id').get(getClass).patch(updateClass).delete(deleteClass);

module.exports = router;
