const posts = require("../fake")

const getPostsController = (req, res) => {
  res.json({
    error: false,
    data: {
      message: 'Posts retrieved successfully',
      posts: posts
    }
  })
}

module.exports = getPostsController