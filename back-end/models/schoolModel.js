const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: String
});

// schoolSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'user',
//     select: 'name'
//   });

//   next();
// });

const School = mongoose.model('School', schoolSchema);

module.exports = School;