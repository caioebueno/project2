// Requiring path to so we can use relative routes to our HTML files
var exphbs = require("express-handlebars");
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app, express) {
  app.use(express.static(__dirname + '/public'));
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"));
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    console.log(req.user);
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page

    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/api/services/:id", function(req, res) {
    var id = req.params.id;

    db.services
      .findAll({ where: { id: id } })
      .then(result => {
        res.sendFile(path.join(__dirname, "../public/vendorListing.html"));
      })
      .catch(err => {
        throw err;
      });
  });

  app.get("/loginsignup", function(req, res) {
    // If the user already has an account send them to the members page

    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/LoginSignup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePageAfterLogin.html"));
  });

  app.get("/chat/:msgId/:userTo", isAuthenticated, function(req, res){

    var msgId = req.params.msgId;
    var user  = req.user.id;
    var userTo = req.params.userTo;
    var handleObj = {
        user: user,
        userTo: userTo,
        msgId: msgId,
        msgIdClaen: msgId + "clean"
    }
    console.log(handleObj)
    res.render('chat.handlebars', handleObj);

})

app.get("/user", isAuthenticated, function(req, res){
  res.json({user: req.user.id})
})

  app.get("/all/messeges", isAuthenticated, function(req, res){
    res.sendFile(path.join(__dirname, "../public/allMesseges.html"));
  })
};


