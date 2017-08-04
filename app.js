const MongoClient = require('mongodb').MongoClient
, assert = require('assert');
const data = require('./data');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');



app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


// connect to server
MongoClient.connect('mongodb://localhost:27017/newdb', (error, db) => {
  const col = db.collection('robots');
  // assert.equal(null, error);
  console.log("connected successfully to server");


app.get('/',(req, res) => {
  const col = db.collection('robots');
  col.find().toArray((error, results)=> {
    // console.log("list",results);
    res.render('list', {models: results});
  });
});

app.get('/detail/:id', (req, res) => {
  const col = db.collection('robots');

  let id = req.params.id;
  id = parseInt(id);
  col.findOne({id: id}).then(robot => {
    // console.log(robot);
    res.render('detail', robot)
  });

});

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
