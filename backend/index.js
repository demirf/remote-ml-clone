const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const JobPost = require('./services/job-post-service');
require('./mongo-connection');

app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());

app.post('/send-post', (req, res) => {
  JobPost.createPost(req.body);

  res.send('ok');
});

app.listen(3000, () => {
  console.log('Port Listening');
});
