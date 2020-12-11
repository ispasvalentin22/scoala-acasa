const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please introduce a discipline name']
  },
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'Teacher',
    required: [true, 'Discipline must belong to a teacher']
  }
});

const Discipline = mongoose.model('Discipline', disciplineSchema);

module.exports = Discipline;