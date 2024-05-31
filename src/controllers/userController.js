const { ObjectId } = require('mongoose').Types;

const { User, Thoughts } = require('../models');

module.exports = {
    // all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findById({ _id: req.params.userId })
            .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID try again!'});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a user 
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID try again!'});
            }

            await Thoughts.deleteMany({ _id: {$in: user.thoughts} });
            res.json({ message: 'User and associated thoughts have been deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

// Need to come back and make sure to add friend functions
