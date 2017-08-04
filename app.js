const MongoClient = require('mongodb').MongoClient
, assert = require('assert');
const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/list', function (req, res) {
  res.render('list', data);
});






// MongoClient.connect('mongodb://localhost:27017/newdb', (error, db) => {
//   const robots = db.collection('users');
//   assert.equal(null, error);
//   console.log("connected successfully to server");
//
//   robots.find({}).toArray((error, results) => {
//
//   });
//
//   robots.findOne({}, (error, results) => {
//     console.log(results);
//   });
//
// });




app.listen(3000);
