import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('즐거운 CI/CD');
});

app.listen(3000, () => {
  console.log('server is running!');
});
