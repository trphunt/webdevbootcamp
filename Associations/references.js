var mongoose = require("mongoose"),
Post         = require("./models/post"),
User         = require("./models/user");

mongoose.connect("mongodb://localhost/blog-demo_2", {useMongoClient: true});
mongoose.Promise = global.Promise;

Post.create({
   title: "How to cook the best burger pt. 4",
   content: "sadasdsasad"
}, function(err, post){
    if(err){
        console.log(err);
    } else {
        User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                })
            }
        });
    }
});

// Find user
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// find all posts for that user

/*User.create({
   email: "bob@gmail.com",
   name: "Bob Belcher"
});*/