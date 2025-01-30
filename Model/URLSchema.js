const mongoose=require("mongoose");

const user=new mongoose.Schema({
   Url:{
    type:String,
    required:true,
   },
   Redirect:{
    type:String,
    required:true,
   },

});

const data=mongoose.model("data",user);

module.exports=data;