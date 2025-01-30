const express=require("express");
const DBConnection=require("./DB_Connection");
const UserRoutes=require("./Routes/UrlRoutes")
const Port=8000;
const app=express();
DBConnection();
app.use(express.urlencoded({ extended: true }));
app.use("/url",UserRoutes);

app.listen(Port,()=>{
    console.log(`Server Started at port ${Port}`)
})