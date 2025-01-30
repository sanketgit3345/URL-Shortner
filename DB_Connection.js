const mongoose=require("mongoose");
const URI="";


async function DBConnection(){
    try {
        
        await mongoose.connect(URI,{
            
        });
        console.log("connected");
        
    } catch (error) {
        console.log("error", error);
    }
    
}

module.exports=DBConnection;
