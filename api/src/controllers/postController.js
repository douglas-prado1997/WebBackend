const postModel = require('../models/postModel')


const getPost = async (request, response) => {
  const post = await postModel.getPost();
      return response.status(200).json(post);
  }

const createpost = async (request, response) => {
    const createdPost = await postModel.createPost(request.body)
  
  return response.status(201).json(createdPost)
  }

  module.exports = {
    createpost,
    getPost
};