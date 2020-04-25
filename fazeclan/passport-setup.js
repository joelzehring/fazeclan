const passport = require("passport");
const GithubStrategy = new (require("passport-github2").Strategy)(
  {
    clientID: "a07ebdfd14dc7f6062e6",
    clientSecret: "ee1854f93bf397a6b40d1f8b0b1936e9acd73583",
    callbackURL: "/auth/github/redirect"
  },
  async (token, tokenSecret, profile, done) => {
    // find current user in UserModel
    console.log(profile);
    const currentUser = await User.findOne({
      githubId: profile._json.id_str
    });
    // create new user if the database doesn't have this user
    if (!currentUser) {
      const newUser = await new User({
        name: profile._json.name,
        githubId: profile._json.id_str,
        profileImageUrl: profile._json.profile_image_url,
        badges: []
      }).save();
      if (newUser) {
        done(null, newUser);
      }
    }
    done(null, currentUser);
  }
);
const keys = require("./keys.js");
const User = require("./models/user-model");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use('github', GithubStrategy);

   /*
passport.use(
  new GithubStrategy(
 
    {
      clientID: "a07ebdfd14dc7f6062e6",
      clientSecret: "ee1854f93bf397a6b40d1f8b0b1936e9acd73583",
      callbackURL: "/auth/github/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        githubId: profile._json.id_str
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          githubId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);
*/