const MongoClient = require('mongodb').MongoClient;
// require in the data file to insert into the mongo database
const data = require('./data.js');


// example from joel's class github
MongoClient.connect("mongodb://localhost:27017/newdb", (error, db) => {
  const col = db.collection('robots');

  // make an empty array to loop over after inserting the robots into it
  let robotList = [];

// users is the array of objects inside of the data file
// forEach executes the function for each array element(users)
// .push adds one or more elements(users) to the end of an array and returns new length
data.users.forEach((users) =>{
  robotList.push(users);
});
// db.collection.insertMany() inserts multiple documents into a collection
col.insertMany(robotList);

});
