const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;