const postModel = require('../models/postModel')


const getPost = async (request, response) => {
  const post = await postModel.getPost();
      return response.status(200).json(post);
  }

const createPost = async (request, response) => {
    const createdPost = await postModel.createPost(request.body)
  
  return response.status(201).json(createdPost)
  }

  const likePost = async (request, response) => {
    const likePost = await postModel.likePost(request.body)
  
  return response.status(201).json(likePost)
  }

  module.exports = {
    createPost,
    getPost,
    likePost
};