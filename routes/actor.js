var express = require('express');
var router = express.Router();
var controller;
function setController(crl)
{
 controller=crl;
}
/* GET home page. */
router.get('/detail', function(req, res, next) {
 controller.showView(req, res, next);
});

module.exports = router;
module.exports.setController=setController;
