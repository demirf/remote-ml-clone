const JobPost = require('../models/job-post');

const createPost = async formData => {
  await JobPost.create(formData);
};

module.exports = {
  createPost
};
