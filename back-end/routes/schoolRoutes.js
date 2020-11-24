const express = require('express');
const {
  getAllSchools,
  getSchool,
  updateSchool,
  deleteSchool,
} = require('./../controllers/schoolController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/').get(getAllSchools);

router.route('/:id').get(getSchool).patch(updateSchool).delete(deleteSchool);

module.exports = router;
