const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please introduce a discipline name']
  },
  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
    required: true
  }
});

const Discipline = mongoose.model('Discipline', disciplineSchema);

module.exports = Discipline;