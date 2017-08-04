const MongoClient = require('mongodb').MongoClient
, assert = require('assert');
const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/list',(req, res) => {
  res.render('list', data);
});





// connect to server
MongoClient.connect('mongodb://localhost:27017/newdb', (error, db) => {
  const col = db.collection('robots');
  // assert.equal(null, error);
  console.log("connected successfully to server");

// finds all robots
//   col.find({}).toArray((error, results) => {
//     console.log(results);
//   });
//
// // finds one robot
//   col.findOne({}, (error, results) => {
//     console.log(results);
//   });

app.get('/', (req, res) => {
  col.find({}).toArray((error, results) => {
    res.render('list', results);
  });
});

});




app.listen(3000);
