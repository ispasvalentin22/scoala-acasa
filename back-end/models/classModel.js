const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please introduce a class name']
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: [true, 'Class must belong to a school']
  },
  disciplines: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Discipline'
    }    
  ]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;