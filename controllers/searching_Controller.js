var Controller=require('../core/Controller');
var method=searching_Controller.prototype;
function searching_Controller(name){ method.LoadModel(name); method.privateModel=method.model  }

method.show=function (req, res, next) {

method.privateModel.getFilmsByKey(req.body.value,function(errF,lFilm){
method.privateModel.getActorsByKey(req.body.value,function(errA,lActor){ 
var data="";
	if(errF!=null)
	data+= '<li><h4>Sản phẩm</h4></li>';
	for(var i in lFilm)
	{
		data+= lFilm[i]["_id"]+SPLIT_MEMBER+lFilm[i]["image"]+SPLIT_MEMBER+lFilm[i]["name"];
		if(i!=lFilm.length-1)
		data+= SPLIT_ROW;
	}
	
	if(errA!=0)
	data+=NEW_LINE;
	for(var i in lActor)
	{
	
		data+= lActor[i]["_id"]+SPLIT_MEMBER+lActor[i]["name"];
		if(i!=lActor.length-1)
		data+=SPLIT_ROW;
	}
 res.send(data); 
 });
 });

  
};

method=new Controller();
module.exports=searching_Controller;