const Class = require('./../models/classModel');
const Teacher = require('./../models/teacherModel');
const Announcement = require('./../models/announcementModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllClasses = catchAsync(async (req, res, next) => {
  const classes = await Class.find();

  res.status(200).json({
    status: 'success',
    results: classes.length,
    data: {
      classes,
    },
  });
});

exports.getClass = catchAsync(async (req, res, next) => {
  const classs = await Class.findById(req.params.id).populate('announcements');

  if (!classs) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      classs,
    },
  });
});

exports.createClass = catchAsync(async (req, res, next) => {
  const classs = await Class.create(req.body);

  const updatedTeacher = await Teacher.findOneAndUpdate(
    { name: req.body.currentUser.name },
    { $set: { class: classs._id } }
  );

  res.status(201).json({
    status: 'success',
    data: {
      classs,
    },
  });
});

exports.deleteClass = catchAsync(async (req, res, next) => {
  const classs = await Class.findByIdAndDelete(req.params.id);

  if (!classs) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

exports.updateClass = catchAsync(async (req, res, next) => {
  const classs = await Class.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!classs) {
    return next(new AppError('No class found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: classs,
    },
  });
});

exports.addAnnouncement = catchAsync(async (req, res, next) => {
  const announcement = await Announcement.create(req.body);

  const classUpdated = await Class.findByIdAndUpdate(req.params.id, {
    $push: { announcements: announcement._id },
  });

  res.status(200).json({
    status: 'success',
    data: {
      announcement,
      classUpdated,
    },
  });
});
