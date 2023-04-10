const form = document.getElementById('blog-form');
const postsContainer = document.getElementById('blog-container');
const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')

const createElement = (type, className, text = null) => {
  const element = document.createElement(type);
  element.className = className;
  element.innerText = text;
  return element;
};

const appendElement = (parent, child) => {
  parent.appendChild(child);
};

const createCard = (post) => {
  const postElement = createElement('div', 'card');
  const titleElement = createElement('h2', 'post-title', post.title);
  const contentElement = createElement('p', 'post-content', post.content);
  const buttonElement = createElement('button', 'post-button', 'Read More');
  appendElement(postElement, titleElement);
  appendElement(postElement, contentElement);
  appendElement(postElement, buttonElement);
  appendElement(postsContainer, postElement);
};


fetch('/api/v1/posts')
  .then(res => res.json())
  .then(data => {
    const { posts } = data.data;
    posts.map(post => createCard(post));
  });

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const content = contentInput.value;

  const body = {
    title,
    content
  }

  fetch('/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(dat => {
      const { post } = dat.data;
      createCard(post);
      
    })
})