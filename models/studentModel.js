const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
  },
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  grades: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Grade',
    },
  ],
  role: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
