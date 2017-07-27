var data = require("../data/friends");
var Questions=[
        "I make friends easily.",
        "I have a vivid imagination.",
        "I worry about things.",
        "I love large parties.",
        "I believe in the importance of art.",
        "I get angry easily.",
        "I take charge." ,
        "I experience my emotions intensely.",
        "I often feel blue.",
        "I am always busy."
    ];

module.exports=function(app){

app.get("/survey/questions",function(req, res){
   return res.json(Questions);
});

app.get("/api/users",function(req,res){
    return res.json(data);
});

app.post("/api/new", function(req, res) {
    var friend=findFriend(req.body);
    console.log(friend.Name);
    data.push(req.body);
    res.json(friend);
});


}
function findFriend(u)
{
    var userAnsArray=u.Answers;
    var friendInd=0;
    var friendRate=100;
    var score=0; 
    for(var i=0; i<data.length;i++)
    {
        var arr=data[i].Answers;
        for(var x=0;x<10;x++)
        { 
            score+= Math.abs(userAnsArray[x]-arr[x]);
        }
        if(score<friendRate)
            {   
                friendRate=score;
                friendInd=i;    
            }
        score=0;
    }
    // console.log("score: "+score);
    // console.log("friendInd: "+friendInd);
    return(data[friendInd]);
}