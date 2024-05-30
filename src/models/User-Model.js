const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts-model');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true,            
        },
        toughts: [thoughtsSchema], 
        friends: [userSchema],
    },
    {
    toJSON: {
        getters: true,
    }
}
);

const User = model('user', userSchema);

module.exports = User;