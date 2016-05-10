var Controller=require('../core/Controller');
var method=actor_Controller.prototype;
function actor_Controller(name){method.LoadModel(name); method.privateModel=method.model;   }
method.showView=function (req, res, next) {
var page=req.query.page;

if(page==null)
	page=1;
if((typeof page === 'string') &&  page%1!=0 || page<1)
{
 res.redirect(global.site_path+"errorUnknown");
 return res.next();
}
page-=1;

method.privateModel.getActorByID(req.query.id,page,function(err,result,pageSize){
if(result!=null)
	result=result[0];
else
{
	res.redirect(global.site_path+'errorUnknown');
	return ;
}
var totalPage=Math.floor(pageSize/global.PAGE_SIZE);
if(pageSize%global.PAGE_SIZE!=0) 
	totalPage+=1; 
		
if(totalPage<page+1){
 res.redirect(global.site_path+"errorUnknown");
 return ;
}
res.render('Actor/Detail',{info:result,pageSize:pageSize,pageIndex:page+1,totalPage:totalPage});
});

};

method=new Controller();
module.exports=actor_Controller;