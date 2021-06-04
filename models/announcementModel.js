const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
  },
  title: {
    type: String,
    required: [true, 'An announcement must have a title'],
  },
  description: {
    type: String,
    required: [true, 'An announcement must have a description'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
