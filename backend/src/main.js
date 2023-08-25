import express from 'express';

const app = express();
const port = 8080;

app.use(express.static('frontend/dist'));

app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
