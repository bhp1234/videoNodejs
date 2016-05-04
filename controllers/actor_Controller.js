var Controller=require('../core/Controller');
var method=actor_Controller.prototype;
function actor_Controller(name){   }
method.showView=function (req, res, next) {
method.model.getActorByID(req.query.id,function(err,result){
if(result!=null)
result=result[0];
else
{
	res.redirect(global.site_path+'errorUnknown');
	return res.next();
}

res.render('ActorDetail',{info:result});
});

};

method=new Controller();
module.exports=actor_Controller;