const jwt = require("jsonwebtoken")

const createTokenUser = async (user, req, res)=> {

    const token = jwt.sign({
        name: user.name,
        id: user.id,
        is_sys_admin: user.is_sys_admin
        
    }, process.env.SECRETPASSWORD)
   
    res.status(200).json({message: "Login ok", token: token, userId: user.id, user:user})

}

module.exports = createTokenUser