const router =require('express').Router();
const {
    getUsers, getSingleUser, createUser, deleteUser
} = require('../../controllers/userController');

// localhost/api/users
router.route('/').get(getUsers).post(createUser);

// localhost/api/users/:userId
router.route('/:userId').get(getSingleUser).destroy(deleteUser);

module.exports = router;