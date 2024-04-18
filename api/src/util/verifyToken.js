const jwt = require("jsonwebtoken")
const getToken = require("./getToken")

const checkToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Ops! Parece que você não tem acesso a este recurso" })
    }
    const token = getToken(req)

    if (!token) {
        res.status(401).json({ message: "Ops! Parece que você não tem acesso a este recurso" })
        return
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRETPASSWORD)
        next()
    } catch (error) {
        res.status(401).json({ message: "Ops! Parece que você não tem acesso a este recurso" })
    }
}


const getUserByToken = (token) => {

        const decoded = jwt.verify(token, process.env.SECRETPASSWORD)
        const user = {
            name: decoded.name,
            id: decoded.id,
            is_sys_admin: decoded.is_sys_admin
        }
        return user;
}

module.exports = {
    checkToken,
    getUserByToken
};
