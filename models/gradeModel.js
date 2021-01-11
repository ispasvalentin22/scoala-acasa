const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  ofStudent: {
    type: mongoose.Schema.ObjectId,
    ref: 'Student',
  },
  atDiscipline: {
    type: mongoose.Schema.ObjectId,
    ref: 'Discipline',
  },
  givenAt: Date,
  grade: Number,
});

const Grade = mongoose.model('Grade', disciplineSchema);

module.exports = Grade;
