const express = require("express");
const passport = require('passport');
const Strategy = require('passport-github2').Strategy;
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const keys = require("./keys.js");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header
const authRoutes = require("./controllers/auth-routes");
const passportSetup = require("./passport-setup");

const app = express();
const PORT = process.env.PORT || 3001;

//hello

var trustProxy = false;
if (process.env.DYNO) {
  // Apps on heroku are behind a trusted proxy
  trustProxy = true;
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport.use(new Strategy({
  clientID: keys.GITHUB_CLIENT_ID,
  clientSecret: keys.GITHUB_CLIENT_SECRET,
  callbackURL: '/auth/github/redirect',
  proxy: trustProxy
},function(){console.log("logging")}));

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY], //******** */
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gitclub");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
