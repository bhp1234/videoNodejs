var Controller=require('../core/Controller');
var method=video_Controller.prototype;
function video_Controller(name){method.LoadModel(name); method.privateModel=method.model;   }

method.showView=function (req, res, next) {

method.privateModel.getFilmsByID(req.query.id,function(err,Result){
if(Result!=null)
Result=Result[0];
res.render('view',{film:Result});
});

  
};

method=new Controller();
module.exports=video_Controller;