require("dotenv").config();
const express = require("express");

const fetch = require("node-fetch");


const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;

const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gitclub");

// Set up api route
app.use('/api/gitinfo/:username', function (req, res) {
  // Access Token for github
  const token = process.env['GITHUB_ACCESS_TOKEN'];
  // GraphQL query 
  const query = `

    {
        viewer {
          login
      
        }
        user(login: "${req.params.username}") {
          bio
          followers {
            totalCount
          }
          name
          avatarUrl
          repositories {
            totalCount
          }
              contributionsCollection {
            totalCommitContributions
          }
        }
      }
`;
// Request to github API
  const options = {
    method: "post",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: query
    })
  };

  // Fetch the data from github graphql
  fetch(`https://api.github.com/graphql`, options)
    .then(res => res.json())
    .then(function (data) {
      // Displays that beautiful data
      res.send(data);
    });
} );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
