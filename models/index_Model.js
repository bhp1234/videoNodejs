var Model=require('../core/Model');
function index_Model(){}
var method=index_Model.prototype;

method.getFilms=function(callback){ 
method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Films');
	collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
 
		callback(result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
	
	  });

  }


});
};

method.getCategories=function(callback){ 
method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Categories');
	collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {

		callback(result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
	 
	  });

  }


});
};

method.getFilmType=function(id,index,callback){ 
method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {

	var collection = db.collection('FilmType');
	collection.find({cateId:id}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
		callback(result,index);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
	 
	  });

  }
});
};

method.getListFilmType=function(list,callback){ 
	var result={};
	for(var i in list)
	{
	var j=0;
	  this.getFilmType(list[i]['_id'],i,function(data,index){	
	  result[list[index]['_id']]=data;
	  if(j==list.length-1)
	  callback(result);
	  j++;
	  });
	}
};





method=new Model();
module.exports=index_Model;