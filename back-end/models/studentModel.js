const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const Student = mongoose.model('Student', schoolSchema);

module.exports = Student;
