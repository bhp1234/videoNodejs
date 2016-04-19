
var method=Model.prototype;
function Model(){}

method.MongoClient = require('mongodb').MongoClient;


module.exports=Model;