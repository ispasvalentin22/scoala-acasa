const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please introduce a teacher name'],
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
  },
  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
  },
});

const Teacher = mongoose.model('Teacher', disciplineSchema);

module.exports = Teacher;
