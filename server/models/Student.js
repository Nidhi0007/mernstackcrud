const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String},
 
  marks: { type: Number},

}, {
  timestamps: true,
});

const Students = mongoose.model('Students', StudentSchema);

module.exports = Students;