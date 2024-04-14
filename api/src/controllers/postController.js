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

  const comment = async (request, response) => {
    const comment = await postModel.comment(request.body)
  
  return response.status(201).json(comment)
  }

  const getComment = async (request, response) => {
    const comment = await postModel.getComment()
  
    return response.status(200).json(comment);
  }

  module.exports = {
    createPost,
    getPost,
    likePost,
    comment,
    getComment
};