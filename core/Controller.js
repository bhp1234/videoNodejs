var method=Controller.prototype;
method.model='';
function Controller(){}

method.LoadModel=function(name){
var model=require('../models/'+name+'_Model');
model=new model();
method.model=model;
};


module.exports=Controller;
