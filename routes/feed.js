const express = require('express');
const feedController = require('../controllers/feed');

const app = express();

router.get('/posts', feedController.getPosts);

module.exports = router;