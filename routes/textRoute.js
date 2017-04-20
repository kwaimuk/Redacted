/* jshint esversion: 6 */
var express = require('express');
var textRoute = express.Router();

textRoute.use('/', function (req, res, next)
                    {
                     let string = req.body.message;
                     string = corrector(string);
                      next();
                    });

textRoute.route('/')
//push the body buzzword property into the object key buzzword with array called buzzwords
.post(function (req, res ) {
  res.send(req.body.message);
});


module.exports =textRoute;

corrector=(string) => {
  let words=[{selfie : "self-portrait"},
  {yummers : "delicious"},
  {bruh : "wow"},
  {doge : "pug"},
  {cilantro : "soap"},
  {bae : "beloved"},
  {swag : "style"},
  {yolo : "carpe diem"}
  ];

  for (var i = 0;i<string.length; i++) {
      let key = Object.keys(words[i]);
    console.log(key);
    console.log(words[i].key);
    // let newString = string.replace(Object.keys(words[i]), words[i].Object.keys(words[i]));
    // console.log(newString);
  }
};