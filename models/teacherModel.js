const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please introduce a teacher name'],
  },
  role: {
    type: String,
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    // required: [true, 'Please tell us your school'],
  },
  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
  },
  gotClass: {
    type: String,
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
