const Class = require('./../models/classModel');
const Teacher = require('./../models/teacherModel');
const Student = require('./../models/studentModel');
const Announcement = require('./../models/announcementModel');
const Discipline = require('./../models/disciplineModel');
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
  const classs = await Class.findById(req.params.id).populate('announcements').populate('disciplines').populate('students');

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

exports.addAnnouncement = catchAsync(async (req, res) => {
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

exports.addStudent = catchAsync(async (req, res, next) => { // BUG: can't prevent duplicate students
  const student = await Student.find({ name: req.body.newStudent });
  if (!student.length) {
    return next(new AppError('Nu a fost gasit niciun elev cu acest nume!', 404));
  }
  await Student.update({ name: req.body.newStudent }, { $set: { class: req.params.id }});

  const studentFoundAlready = await Class.find({ students: student[0]._id });

  if (studentFoundAlready.length) {
    return next(new AppError('Elevul este deja intr-o clasa!', 405));
  } else {
    const classUpdated = await Class.findByIdAndUpdate(req.params.id, {
      $push: { students: student[0]._id },
    });

    res.status(200).json({
      status: 'success',
      data: {
        student,
        classUpdated,
      },
    });
  }
});

exports.addDiscipline = catchAsync(async (req, res, next) => {
  let discipline, disciplineNotFound = false;
  const classAlreadyHaveDiscipline = await Class.findById(req.params.id).populate('disciplines');
  
  console.log(classAlreadyHaveDiscipline);
  const x = classAlreadyHaveDiscipline.toJSON().disciplines.filter(item => item.name === req.body.name);
  console.log(x);

  x.length === 0 ? (discipline = await Discipline.create(req.body)) : null;

  const classUpdated = await Class.findByIdAndUpdate(req.params.id, {
    $push: { disciplines: discipline._id }
  });

  res.status(200).json({
    status: 'success',
    data: {
      discipline,
      classUpdated
    }
  });
});