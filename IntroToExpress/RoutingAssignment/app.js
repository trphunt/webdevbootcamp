var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound +"'");
});

app.get("/repeat/:word/:num", function(req, res){
    var result = "";
    for(var i = 0; i < req.params.num; i++){
        result += req.params.word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});