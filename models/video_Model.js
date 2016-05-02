var Model=require('../core/Model');
function video_Model(){}
var method=video_Model.prototype;

method.getFilmsByID=function(key,callback){ 

method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Films');
	collection.aggregate([
						{$match:{'_id':new method.ObjectID(key)}},
						{$lookup:{from:'Episode',localField:'_id',foreignField:'film_id',as:'listEp'}},
						{$lookup:{from:'Type_list',localField:'_id',foreignField:'film_id',as:'listType'}}],(function (err, result) {
      if (err) {
   
		callback('Lỗi truy vấn',null);
      } else if (result.length) {
 var query=[];
	  if(result[0]['listType'].length>0)
	  {
	  
	   for(var i in result[0]['listType'])
	   {
		var ob={_id:result[0]['listType'][i]['type_id']};
		query.push(new method.ObjectID(result[0]['listType'][i]['type_id']));
	   }
	   
	   console.log(query);
	   var collection2=db.collection("FilmType");
	   collection2.find({_id:{$in:query}}).toArray(function(err2,result2){
	    if (err2) {
        console.log(err2);
		callback('Lỗi truy vấn',null);
      } else if (result2.length) {

		callback(null,result2);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		callback('Không kết quả',null);
      }
	
	  });
	   

	   }
	  
	  
		callback(null,result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		callback('Không kết quả',null);
      }
	
	  }));

  }


});
};







method=new Model();
module.exports=video_Model;