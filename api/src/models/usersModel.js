const connection = require('./connection')
const bcrypt = require('bcrypt');

const getUsers = async () => {
    const [users] = await connection.execute('select * from users')
    return users || []
};

const getUserByEmail = async (email) => {
    const [user] = await connection.execute('select * from users where email = ?',[email])
    return user || [];
}
const getUserById = async (id) => {
    const [user] = await connection.execute('select * from users where id = ?',[id])
    return user || [];
}

const createUsers = async (users) => {
    const {name, email,password} = users
    const salt = await bcrypt.genSalt(17);
    const passwordHash = await bcrypt.hash(password, salt);
    const [createdUsers] = await connection.execute('insert into users (name,email,password ) values (?,?,?)',[name,email,passwordHash])

    return createdUsers
}

const deleteUsers = async (id_users) => {
    const [deleteUsers] = await connection.execute('delete from users where id =?',[id_users])

    return deleteUsers
}

const updateUsers = async (id_users,users) => {
    const {name, email,password} = users
    const [updateUsers] = await connection.execute('update users set name = ?,email = ?,password = ? where id =?',[name,email,password,id_users])

    return updateUsers
}

const login = async (email,password) => {
    const [user] = await connection.execute('select * from users where email = ?',[email])
    const passwordMatch = await bcrypt.compare(password, user[0].password);
    if(!passwordMatch){
        return []
    }
    return user || [];
}

module.exports = {
    getUsers,
    createUsers,
    getUserByEmail,
    deleteUsers,
    updateUsers,
    login,
    getUserById
};