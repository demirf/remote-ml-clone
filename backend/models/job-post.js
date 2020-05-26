const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
  companyName: String,
  companyWebsite: String,
  companyEmail: String,
  companyLogo: '',
  jobTitle: String,
  jobCategory: String,
  jobLevel: String,
  jobDescription: String
});

module.exports = mongoose.model('JobPost', JobPostSchema);
