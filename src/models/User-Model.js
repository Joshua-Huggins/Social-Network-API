const { Schema, model, Types } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true 
        },
        email: {
            type: String,
            required: true,
            unique: true,            
        },
        toughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ], 
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;