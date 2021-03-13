const School = require('../models/schoolModel');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
});

exports.getCurrentUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  let currentUser;
  switch (user.role) {
    case 'school':
      currentUser = await School.find({ user: req.user._id });
      break;
    case 'teacher':
      currentUser = await Teacher.find({ user: req.user._id });
      break;
    case 'student':
      currentUser = await Student.find({ user: req.user._id });
    default:
      currentUser = await Student.find({ user: req.user._id });
  }

  res.send(...currentUser); // spread operator to convert array returned by query to an object
});
