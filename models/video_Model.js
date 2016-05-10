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
  try{
  
	collection.aggregate([
						{$match:{'_id':new method.ObjectID(key)}},
						{$lookup:{from:'Episode',localField:'_id',foreignField:'filmID',as:'listEp'}},
						{$lookup:{from:'Type_of_Film',localField:'_id',foreignField:'filmID',as:'listType'}},
						{$lookup:{from:'Actors_of_Film',localField:'_id',foreignField:'filmID',as:'listActor'}},{$limit:20}],(function (err, result) {
      if (err) {
   
		callback('Lỗi truy vấn',null);
      } else if (result.length) {
			result[0]['listEp'].sort(function(a,b){return a['ep']>b['ep'];});
			var query=[];
			if(result[0]['listType'].length>0)
			{		  
				for(var i in result[0]['listType'])
				{
					query.push(new method.ObjectID(result[0]['listType'][i]['typeID']));
				}
		   }
			var collection2=db.collection("FilmType");
			collection2.find({_id:{$in:query}}).toArray(function(err2,result2){
				result[0]['Type']=result2;
			
				if(result[0]['listActor'].length>0)
				{
					query=[];
					for(var i in result[0]['listActor'])
					{
						query.push(new method.ObjectID(result[0]['listActor'][i]['actorID']));
					}				
				}
				var collection3=db.collection("Actors");
				collection3.find({_id:{$in:query}}).toArray(function(err3,result3){
					result[0]['Actor']=result3;
					console.log(result);
					callback(null,result);
					
				});
				
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
module.exports=video_Model;