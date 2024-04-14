const express = require('express');
const usersController = require('./controllers/usersController');
const usersGetError = require('./getError/getErrorUsers');

const router = express.Router();

router.get('/users', usersController.getUsers);
router.post('/users', usersGetError.validateField, usersController.createUsers);
router.delete('/users/:id', usersController.deleteUsers);
router.put('/users/:id', usersController.updateUsers);
router.post('/login',  usersController.login);



module.exports = router;
