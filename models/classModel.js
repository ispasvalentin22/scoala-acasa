const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please introduce a class name'],
    unique: true,
  },
  // school: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'School',
  //   required: [true, 'Class must belong to a school']
  // },
  disciplines: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Discipline',
    },
  ],
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Student',
    },
  ],
});

const Class = mongoose.model('Class', classSchema);

// Virtual populate
classSchema.virtual('announcements', {
  ref: 'Announcement',
  foreignField: 'class',
  localField: '_id',
});

module.exports = Class;
