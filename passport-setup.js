const passport = require("passport");
const keys = require("./keys.js");
const User = require("./models/user-model");
const GithubStrategy = require("passport-github2");

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

passport.use(
  new GithubStrategy(
 
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        name: profile.username,
        githubId: profile.id
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile.username,
          githubId: profile.id
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

// Github user profile object {
//   *   - `provider`         always set to `github`
//   *   - `id`               the user's GitHub ID
//   *   - `username`         the user's GitHub username
//   *   - `displayName`      the user's full name
//   *   - `profileUrl`       the URL of the profile for the user on GitHub
//   *   - `emails`           the user's email addresses
// }