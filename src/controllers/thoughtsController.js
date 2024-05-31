const { Thoughts} = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought
    async getOneThought(req, res) {
        try {
            const thoughts = await Thoughts.findById({ _id: req.params.thoughtsId });

            if (!thoughts) {
                return res.status(404).json({ message: 'No thoughts here try again!' });
            }
            res.json(thoughts);
        } catch (err) {
            res.json(500).json(err);
        }
    },
    // Create a thought
    async haveThoughts(req, res) {
        try {
            const thoughts = await Thoughts.create(req.body);
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async noThoughts(req, res) {
        try {
            const thoughts = await Thoughts.findByIdAndDelete({ _id: req.params.thoughtsId });

            if (!thoughts) {
                return res.status(404).json({ message: 'No thoughts here try again' });
            }
            await Reaction.deletMany({ _id: { $in: thoughts.reactions } });
            res.json({ message: 'Thoughts and Reactions deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};