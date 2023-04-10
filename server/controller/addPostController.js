const posts = require("../fake");
const postSchema = require("../utils/validation/postSchema");

const addPostController = (req, res) => {
  const { title, content, visibility } = req.body;

  const { error, value } = postSchema.validate({ title, content, visibility }, {
    abortEarly: false
  });

  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details
      }
    });
    return;
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    visibility
  }

  posts.push(newPost);

  res.status(201).json({
    error: false,
    data: {
      message: 'Post created Successfully!',
      post: newPost,
    }
  })
}

module.exports = addPostController