var Model=require('../core/Model');
function actor_Model(){}
var method=actor_Model.prototype;

method.getActorByID=function(key,callback){ 

method.MongoClient.connect(global.url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)

	var collection = db.collection('Actors');
  try{
  
	collection.aggregate([
						{$match:{'_id':new method.ObjectID(key)}},
						{$lookup:{from:'Actors_of_Film',localField:'_id',foreignField:'filmID',as:'listActor'}}],(function (err, result) {
      if (err) {
   
		callback('Lỗi truy vấn',null);
      } else if (result.length) {
			var query=[];
			if(result[0]['listActor'].length>0)
			{		  
				for(var i in result[0]['listActor'])
				{
					query.push(new method.ObjectID(result[0]['listActor'][i]['filmID']));
				}
		   }
			var collection2=db.collection("Films");
			collection2.find({_id:{$in:query}}).toArray(function(err2,result2){
				result[0]['Film']=result2;
				console.log(result);
				callback(null,result);
				
			});	
	  
		
      } else {
        console.log('No document(s) found with defined "find" criteria!');
		callback('Không kết quả',null);
      }
	
	  }));
   }catch(ex){callback('Lỗi',null);}
  }


});
};





method=new Model();
module.exports=actor_Model;