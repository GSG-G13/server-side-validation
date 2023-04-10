const express = require('express');
const { getPostsController, addPostController } = require('../controller');

const router = express.Router();

router.get('/posts', getPostsController);
router.post('/posts', addPostController)

module.exports = router;