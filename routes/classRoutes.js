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
  .post(authController.protect, createClass); // TODO: protect and restrict to teacher role

router.route('/:id').get(getClass).patch(updateClass).delete(deleteClass);

module.exports = router;
