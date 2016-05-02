var Model=require('../core/Model');
function searching_Model(){}
var method=searching_Model.prototype;

method.getFilmsByKey=function(key,callback){ 

if(key.length==0)
{
callback(' ',null);
return;
}

method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Films');
	collection.find({$or:[{name:new RegExp('^'+key+'.*', 'i')},{english_name:new RegExp('^'+key+'.*', 'i')}]}).limit(5).toArray(function (err, result) {
      if (err) {
        console.log(err);
		callback('Lỗi truy vấn',null);
      } else if (result.length) {

		callback(null,result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		callback('Không kết quả',null);
      }
	
	  });

  }


});
};

method.getActorsByKey=function(key,callback){ 
if(key.length==0)
{
callback(' ',null);
return;
}

method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Actors');
	collection.find({name:new RegExp('^'+key+'.*', 'i')}).limit(5).toArray(function (err, result) {
      if (err) {
   
		callback('Lỗi truy vấn',null);
      } else if (result.length) {

		callback(null,result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		callback('Không kết quả',null);
      }
	
	  });

  }


});
};






method=new Model();
module.exports=searching_Model;