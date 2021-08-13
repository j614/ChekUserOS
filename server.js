var express = require('express');
var os = require("os")
var app = express();

const open = require('open');
const PORT = process.env.PORT || 8080;
open('http://localhost:8080/index');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded());

app.get('/', function(req, res) {
  res.render('pages/index')
});
app.get('/index', function(req, res) {
  res.render('pages/index')
});
app.post('/index', function(req, res) {
  if(!req.body) return res.sendStatus(400);

  if (os.userInfo().username === req.body.check_field) {
    res.render("pages/answer", { answer: "Есть такой пользователь"})}
  else
  res.render("pages/answer", { answer: "Нет такого пользователя"});
});
app.post('answer', function(req, res) {
  res.render('pages/index')
});



app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});