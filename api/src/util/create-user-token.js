const jwt = require("jsonwebtoken")

const createUserToken = async (user, req, res)=> {
    // Criando token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, 'secretpassword')
   
    res.status(200).json({message: "Login Efetuado com sucesso", token: token, userId: user._id, user:user})

}

module.exports = createUserToken