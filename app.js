const express = require("express");
const bodyParser = require("body-parser");

const app = express();
 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
  app.set("view engine", "ejs");



app.get("/",(req,res)=>{

  res.render("main");

});




app.all("*",(req,res)=>{
  res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log(`local server is running on ${port}`);
  }
    
});


