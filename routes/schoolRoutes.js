const express = require('express');
const {
  getAllSchools,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
} = require('./../controllers/schoolController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/').get(getAllSchools);

router
  .route('/:id')
  .get(getSchool)
  .patch(updateSchool)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deleteSchool
  );

router.route('/users/:id').post(createSchool);

module.exports = router;
