const express=require("express");
const {createURL,addURL,redirected}=require("../Controllers/handleURL")
const router=express.Router();


router.get("/",addURL);
router.post("/",createURL);
router.get("/:short_id",redirected);

module.exports=router;