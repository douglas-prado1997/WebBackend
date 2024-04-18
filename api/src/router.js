const express = require('express');
const usersController = require('./controllers/usersController');
const postController = require('./controllers/postController');
const usersGetError = require('./getError/getErrorUsers');
const verifyToken = require('./util/verifyToken')

const router = express.Router();

router.get('/users', usersController.getUsers);
router.post('/users', usersGetError.validateField,verifyToken.checkToken ,usersController.createUsers);
router.delete('/users/:id', usersController.deleteUsers);
router.put('/users/:id', usersController.updateUsers);
router.post('/login',  usersController.login);
router.post('/post',verifyToken.checkToken , postController.createPost);
router.get('/post', postController.getPost);
router.post('/post/like', postController.likePost);
router.post('/post/comment', postController.comment);
router.get('/post/getcomment', postController.getComment);


module.exports = router;
