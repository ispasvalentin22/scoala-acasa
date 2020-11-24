const School = require('./../models/schoolModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const { findByIdAndUpdate } = require('./../models/schoolModel');

exports.getAllSchools = catchAsync(async (req, res, next) => {
  const schools = await School.find();

  res.status(200).json({
    status: 'success',
    results: schools.length,
    data: {
      schools,
    },
  });
});

exports.getSchool = catchAsync(async (req, res, next) => {
  const school = await School.findById(req.params.id);

  if (!school) {
    return next(new AppError('No school found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      school,
    },
  });
});

exports.updateSchool = catchAsync(async (req, res, next) => {
  const school = await School.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      school,
    },
  });
});

exports.deleteSchool = catchAsync(async (req, res, next) => {
  const school = await School.findByIdAndDelete(req.params.id);

  if (!school) {
    return next(new AppError('No school found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null
  });
});