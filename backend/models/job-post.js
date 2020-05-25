const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
  CompanyName: String,
  CompanyWebsite: String,
  CompanyEmail: String,
  JobTitle: String,
  JobCategory: String,
  JobLevel: String,
  JobDescription: String
});

module.exports = mongoose.model('JobPost', JobPostSchema);
