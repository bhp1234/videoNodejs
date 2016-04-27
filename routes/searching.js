var express = require('express');
var router = express.Router();
var controller;
function setController(crl)
{
 controller=crl;
}
/* GET home page. */
router.post('/', function(req, res, next) {
 controller.show(req, res, next);
});
router.get('/', function(req, res, next) {

 controller.show(req, res, next);
});
module.exports = router;
module.exports.setController=setController;
