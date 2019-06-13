const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express')
// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db';
let app = express()
// Database Name
const dbName = 'edx-course-db';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  console.log(dbName);
//   console.log(app);

   const db = client.db(dbName);
  // let user = require('/accounts');
  MongoClient.connect(url, function(err, db) {
    // console.log(req);
     let newAccount = req.body
     var myobj = { name: "Company Inc", address: "Highway 37" };
     db.collection('accounts').insert(myobj, (error, results) => {
         if (error) return next(error)
         res.send(results)
     })
 })

  client.close();
});


app.listen(3000)