var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, {
        useNewUrlParser: true
    })
    .then(function (db) {
        var dbo = db.db("uhpeer");
        dbo.collection('Employee').insertOne({
                Employeeid: 4,
                Employee_Name: "NewEmployee"
            })

            .then(function (db) {
                dbo.collection('Employee').insertOne({
                    Employeeid: 5,
                    Employee_Name: "NewEmployee1"
                })
            })
    });

// MongoClient.connect(url, {
//     useNewUrlParser: true
// }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("uhpeer");

// INSERT RECORD
// insert record
//dbo.collection('Employee').insertOne({
//    "Employeeid": 5,
//    "EmployeeName": "Test"
//});

// SELECT RECORD
//  dbo.collection("Employee").find({}).toArray(function(err, result) {
//      if (err) throw err;
//      console.log(result);
//      db.close();
//    });

// UPDATE RECORD
// dbo.collection('Employee').updateOne({
//     "Employeeid": 1
// }, {
//     $set: {
//         "Employee_Name": "Abhishek"
//     }
// });

// DELETE RECORD
// dbo.collection('Employee').deleteOne({
//     "Employee_Name": "Abhishek"
// });

// // Where filter
// dbo.collection("Employee").find({
//     "Employeeid": 1
// }).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
// });
//});

//  if (db!=null && db.isConnected())
//  db.close();