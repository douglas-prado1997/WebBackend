const postModel = require('../models/postModel')


const createpost = async (request, response) => {
    const createdPost = await postModel.createPost(request.body)
  
  return response.status(201).json(createdPost)
  }

  module.exports = {
    createpost
};