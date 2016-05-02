
var method=Model.prototype;
function Model(){}

method.MongoClient = require('mongodb').MongoClient;
method.ObjectID=require('mongodb').ObjectID;

module.exports=Model;