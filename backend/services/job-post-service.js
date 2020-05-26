const JobPost = require('../models/job-post');

const createPost = async formData => {
  await JobPost.create(formData);
};

const getPost = async () => {
  return await JobPost.find();
};

const getPostDetail = async id => {
  return await JobPost.findById(id);
};

module.exports = {
  createPost,
  getPost,
  getPostDetail
};
