// Create web server
// 1. Create express app
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Start the server on port 3000

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./data/comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    body: req.body.body
  };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});