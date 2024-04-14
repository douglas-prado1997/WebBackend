const jwt = require("jsonwebtoken")

const createUserToken = async (user, req, res)=> {
    // Criando token
    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.SECRETPASSWORD)
   
    res.status(200).json({message: "Login ok", token: token, userId: user.id, user:user})

}

module.exports = createUserToken