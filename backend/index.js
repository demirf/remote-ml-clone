const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const JobPost = require('./services/job-post-service');
require('./mongo-connection');

app.get('/', (req, res) => res.send('Hello World!'));

app.use(cors());

app.use(bodyParser.json());

app.post('/send-post', (req, res) => {
  JobPost.createPost(req.body);

  res.send('ok');
});

app.get('/get-post', async (req, res) => {
  const posts = await JobPost.getPost();

  res.send(posts);
});

app.get('/post-detail/:id', async (req, res) => {
  const postDetail = await JobPost.getPostDetail(req.params.id);

  res.send(postDetail);
});

app.listen(3000, () => {
  console.log('Port Listening');
});
