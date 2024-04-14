const usersModel = require('../models/usersModel')
const createUserToken = require('../util/create-user-token');

const getUsers = async (request, response) => {
const users = await usersModel.getUsers();
    return response.status(200).json(users);
}

const createUsers = async (request, response) => {
  const createdUsers = await usersModel.createUsers(request.body)

return response.status(201).json(createdUsers)
}

const deleteUsers = async (request, response) => {
    const { id } = request.params;
    const deleteUsers = await usersModel.deleteUsers(id)
  
  return response.status(201).json(deleteUsers)
  }

  const updateUsers = async (request, response) => {
    const { id } = request.params;
    const updateUsers = await usersModel.updateUsers(id,request.body)
  
  return response.status(201).json(updateUsers)
  }

  const login = async (request, response) => {
    const user = await usersModel.login(request.body.email, request.body.password);
    console.log(user)
  
    if (user.length > 0) {
      await createUserToken(user, request, response);
    } else {
      response.status(401).json("Credenciais inválidas");
    }
  };
  

module.exports = {
    getUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    login
};