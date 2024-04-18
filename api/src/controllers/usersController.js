const usersModel = require('../models/usersModel')
const createTokenUser = require('../util/createTokenUser');
const getToken = require('../util/getToken')
const verifyToken = require('../util/verifyToken')

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
  const token = getToken(request);
  const userCurrent = verifyToken.getUserByToken(token)

  if (id != userCurrent.id && userCurrent.is_sys_admin == 0)
    response.status(401).json({ message: "Ops! Parece que você não tem acesso a este recurso" })

  const updateUsers = await usersModel.updateUsers(id, request.body)

  return response.status(201).json(updateUsers)
}

const login = async (request, response) => {
  const user = await usersModel.login(request.body.email, request.body.password);

  if (user.length == 1) {
    await createTokenUser(user, request, response);
  } else {
    response.status(401).json( { message: "Credenciais inválidas" });
  }
};


module.exports = {
  getUsers,
  createUsers,
  deleteUsers,
  updateUsers,
  login
};