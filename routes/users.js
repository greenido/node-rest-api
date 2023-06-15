const controller = require('../controllers/users');
const router = require('express').Router();

//
// CRUD Routes /users
//
// Get all users
router.get('/', controller.getUsers); // /users

// Get user by id
router.get('/:userId', controller.getUser); // /users/:userId

// Add new user
router.post('/', controller.createUser); // /users

// Update user
router.put('/:userId', controller.updateUser); // /users/:userId

// Delete user
router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;