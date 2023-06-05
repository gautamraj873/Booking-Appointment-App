const express = require('express');

const path = require('path');

const router = express.Router();

const userController = require('../controllers/user')

router.post('/user', userController.postAddUser);
router.get('/user', userController.getUser);
router.put('/user/:id', userController.putEditUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
