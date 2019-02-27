var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog-demo", {useMongoClient: true});
mongoose.Promise = global.Promise;

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// =================================================
/*var newUser = new User({
   email: "hermione@hogwarts.edu",
   name: "Hermione Granger",
});

newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Just kidding. Go to potions class to learn it!"
});

newUser.save(function(err, user){
   if(err){
       console.log(err);
   } else {
       console.log(user);
   }
});*/

// ===========================================
// INITIAL DATA (Comment out after use)
// ===========================================
// <-- Make a new user -->
// ===========================================

/*var newUser = new User({
   email: "charlie@brown.edu" ,
   name: "Charlie Brown"
});
newUser.save(function(err, user){
   if(err){
       console.log(err);
   } else {
       console.log(user);
   }
});*/

// ===========================================
// <-- Make a new post -->
// ===========================================

/*var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
   if(err){
       console.log(err);
   } else {
       console.log(post);
   }
});*/

/*User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        //console.log(err);
    } else {
        user.posts.push({
            title: "A favourite wizard of mine",
            content: "Harry Potter of course!!"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});*/