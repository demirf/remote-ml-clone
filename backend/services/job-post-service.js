const JobPost = require('../models/job-post');

const createPost = async formData => {
  await JobPost.create(formData);
};

const getPost = async () => {
  return await JobPost.find();
};

module.exports = {
  createPost,
  getPost
};
