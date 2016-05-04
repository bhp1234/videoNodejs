var Controller=require('../core/Controller');
var method=video_Controller.prototype;
function video_Controller(name){method.LoadModel(name); method.privateModel=method.model;   }
var session;
method.showView=function (req, res, next) {

method.privateModel.getFilmsByID(req.query.id,function(err,result){
var Ep=1;
if(result!=null)
result=result[0];
else
{
res.redirect(global.site_path+"errorUnknown");
return next();
}
if(result["category"]==global.SERIES_FILM)
{
 if(req.query.Ep!=null)
	Ep=req.query.Ep;
 if(Ep>result['listEp'].length && result['listEp'].length>0)
 {
	res.redirect(global.site_path+"errorUnknown");
	return next();
 }
}

res.render('view',{film:result,Episo:Ep});
});

  
};

method=new Controller();
module.exports=video_Controller;