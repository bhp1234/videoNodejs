var Controller=require('../core/Controller');
var method=index_Controller.prototype;
function index_Controller(name){ method.LoadModel(name);  }

method.show=function (req, res, next) {
 method.model.getCategories(function(lCategory){
 method.model.getFilms(function(lFilm){
method.model.getListFilmType(lCategory,function(filmType){ 

 res.render('index', {  listFilm:lFilm,listCategory:lCategory,listFilmType:filmType}); 
 });
 });
 });
  
};

method=new Controller();
module.exports=index_Controller;