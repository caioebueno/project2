var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

io.on("connection", socket => {
  socket.on("message", (msg, from, to) => {
    let idArray = [from, to].sort();
    let msgId = idArray[0] + "-" + idArray[1];
    console.log(msgId);

    db.messeges
      .create({ msg: msg, msg_id: msgId, user: from })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        throw err;
      });

    io.emit(msgId, msg, msgId, from);
  });
  socket.on("connected", (from, to) => {
    let idArray = [from, to].sort();
    let msgId = idArray[0] + "-" + idArray[1];

    io.emit(msgId + "clean", "clear messeges");

    db.messeges.findAll({ where: { msg_id: msgId } }).then(result => {
      result.forEach(obj => {
        io.emit(msgId, obj.msg, obj.msg_id, obj.user);
      });
    });
  });
});

// Requiring our routes
require("./routes/html-routes.js")(app, express);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  http.listen(8080, () => {
    console.log("listening on *:8080");
  });
});
