var Controller=require('../core/Controller');
var method=index_Controller.prototype;

function index_Controller(name){ method.LoadModel(name); method.privateModel=method.model; }

method.show=function (req, res, next) {

method.privateModel.getCategories(function(lCategory){
method.privateModel.getFilms(function(lFilm){
method.privateModel.getListFilmType(lCategory,function(filmType){ 

 res.render('index', {  listFilm:lFilm,listCategory:lCategory,listFilmType:filmType}); 
 });
 });
 });
  
};

method=new Controller();
module.exports=index_Controller;