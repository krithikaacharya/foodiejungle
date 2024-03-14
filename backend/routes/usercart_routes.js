const express = require("express");
const router = express.Router();


const {
    addcart,
    getcart,
    deletecartitem
    
  } = require("../controller/usercart_controller");

 

router.post("/addcart", addcart);
router.get("/getcart",getcart);
router.delete("/deleteCartItem/:id",deletecartitem);

module.exports=router;