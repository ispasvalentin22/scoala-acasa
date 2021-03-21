const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please tell us your school name!'],
  },
  role: {
    type: String,
  },
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
