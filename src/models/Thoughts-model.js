const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtsText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;