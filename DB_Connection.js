const mongoose=require("mongoose");
const URI="mongodb+srv://sanketgautaam461:sanketgautam0@chatapp.6hk7nha.mongodb.net/?retryWrites=true&w=majority&appName=ChatApp";


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