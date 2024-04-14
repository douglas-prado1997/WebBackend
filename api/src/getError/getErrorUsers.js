const usersModel = require('../models/usersModel')

const  validateField = async (request, response, next) => {
    const { body } = request;

    if (body.name === undefined) {
        return response.status(400).json({ message: 'O campo nome é obrigatório' });
    }

    if (body.name === '') {
        return response.status(400).json({ message: 'Nome está em vazio' });
    }

    if (body.email === undefined) {
        return response.status(400).json({ message: 'O campo email é obrigatório' });
    }

    if (body.email === '') {
        return response.status(400).json({ message: 'email está em vazio' });
    }

    if (body.password === undefined) {
        return response.status(400).json({ message: 'O campo password é obrigatório' });
    }

    if (body.password === '') {
        return response.status(400).json({ message: 'password está em vazio' });
    }

    if (!validatesNumberLetters(body.password)) {
        return response.status(400).json({ message: 'a senha deve conter letras e números' });
    }

    if (await ValidateUserExists(body.email) > 0){
        return response.status(400).json({message: 'E-mail já registrado'});
    }
        
    next();
};

async function ValidateUserExists(email) {
        const users = await usersModel.getUserByEmail(email);
        return users.length; 
}

function validatesNumberLetters(str) {
    const hasrLetters = /[a-zA-Z]/.test(str);
    const hasNumber = /\d/.test(str);

    return hasrLetters && hasNumber;
}

module.exports = {
    validateField
};