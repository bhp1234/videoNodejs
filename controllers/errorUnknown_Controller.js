var Controller=require('../core/Controller');
var method=errorUnknown_Controller.prototype;
function errorUnknown_Controller(name){   }
method.showView=function (req, res, next) {
res.render('errorEmpty',{});
};

method=new Controller();
module.exports=errorUnknown_Controller;