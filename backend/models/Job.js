// Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  longDescription: String,
  type: String,
  department: String,
  location: String,
  experienceLevel: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
