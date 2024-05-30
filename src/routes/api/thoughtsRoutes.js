const router = require('express').Router();

const { getThoughts, getOneThought, haveThoughts, noThoughts} = require('../../controllers/thoughtsController');

// ../api/thoughts
router.route('/').get(getThoughts).post(haveThoughts);

// ../api/thoughts/:thoughtsId
router.route('/:thoughtsId').get(getOneThought).delete(noThoughts);

module.exports = router;