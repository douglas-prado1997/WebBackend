const usersModel = require('../models/usersModel')

const  validateField = async (request, response, next) => {
    const { body } = request;

    if (body.name === undefined) {
        return response.status(400).json({ message: 'The field "name" is required' });
    }

    if (body.name === '') {
        return response.status(400).json({ message: 'name cannot be empty' });
    }

    if (body.email === undefined) {
        return response.status(400).json({ message: 'The field "email" is required' });
    }

    if (body.email === '') {
        return response.status(400).json({ message: 'email cannot be empty' });
    }

    if (body.password === undefined) {
        return response.status(400).json({ message: 'The field "password" is required' });
    }

    if (body.password === '') {
        return response.status(400).json({ message: 'password cannot be empty' });
    }

    if (!validatesNumberLetters(body.password)) {
        return response.status(400).json({ message: 'password must have letters and numbers' });
    }

    if (await ValidateUserExists(body.email) > 0){
        return response.status(400).json({message: 'E-mail already registered'});
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