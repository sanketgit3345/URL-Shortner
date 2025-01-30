const data=require("../Model/URLSchema");
const shortid = require('shortid');

async function addURL(req,res){
   const allURl= await data.find({});

   res.json(allURl);

}
//console.log(shortid.generate());
async function createURL(req,res){
  const body=req.body;

  const result=await data.create({
    Url:shortid.generate(),
    Redirect:body.Redirect,
  })
  res.json({msg:"Generated",URL:result.Url});
}


async function redirected(req,res){
    const shortid=req.params.short_id;
    const entry=await data.find({Url:shortid});


    res.redirect(entry[0].Redirect);
}


module.exports={createURL,addURL,redirected};