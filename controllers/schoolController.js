const School = require('./../models/schoolModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const { findByIdAndUpdate } = require('./../models/schoolModel');
const factory = require('./handlerFactory');

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

exports.createSchool = factory.createOneReferenced(School);
exports.updateSchool = factory.updateOne(School);
exports.deleteSchool = factory.deleteOne(School);
