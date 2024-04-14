const jwt = require("jsonwebtoken")
const getToken = require("./get-token")

const checkToken = (req, res, next) => {
    

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Você não está autorizado a acessar este recurso" })
    }

    const token = getToken(req)

    if (!token) {
        res.status(401).json({ message: "Você não está autorizado a acessar este recurso" })
        return
    }
    try {
        const decoded = jwt.verify(token, 'secretpassword')
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).json({ message: "Você não está autorizado a acessar este recurso" })
    }

}

module.exports = checkToken