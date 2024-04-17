const jwt = require("jsonwebtoken")

const createTokenUser = async (user, req, res)=> {

    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.SECRETPASSWORD)
   
    res.status(200).json({message: "Login ok", token: token, userId: user.id, user:user})

}

module.exports = createTokenUser