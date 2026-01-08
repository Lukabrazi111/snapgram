import express from 'express';

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
  console.log('Response sent');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
