var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var str = "";


app.route('/Employeeid').get(function (req, res)

    {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            var dbo = db.db("uhpeer");
            var cursor = dbo.collection('Employee').find();
            cursor.forEach(function (item) {
                if (item != null) {
                    str = str + "    Employee id  " + item.Employeeid + ", Name " + item.EmployeeName + "</br>";
                }
            }, function (err) {
                res.send(str);
                str = "";
                db.close();
            });
        });
    });

var server = app.listen(3000, function () {});