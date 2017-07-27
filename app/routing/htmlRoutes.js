var path=require("path");
module.exports=function(app){

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"../public/home.html"));
    // res.render("home");
});

app.get("/survey",function(req, res){
   res.sendFile(path.join(__dirname,"../public/survey.html"));
});

}