var express= require("express");
var router=express.Router();

/*Get user listings */
router.get('/',function(req,res,next){
    res.send("You're so cool!");
});

module.exports = router;