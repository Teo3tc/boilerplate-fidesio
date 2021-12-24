const express = require('express');
const app = express();
const path = require('path');
const port = 3200;

app.use(express.static(path.join(__dirname, 'build')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('pages/home');
});
app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Example App att ${port}`);
});
