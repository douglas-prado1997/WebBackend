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

module.exports = checkToken