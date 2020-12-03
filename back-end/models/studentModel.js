const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
