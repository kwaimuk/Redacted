/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const textRoute = require('./routes/textRoute');
const app = express();
const PORT = 4141;

app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//attach movie router to epxress
app.use('/message',textRoute);


// app.get('/', function (req, res) {
//   res.send(`public/index.html`);
// });






app.get("*",(req,res) => {
  res.send('404');
});

const server = app.listen(PORT, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});