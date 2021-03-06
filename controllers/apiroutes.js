require("dotenv").config();
const fetch = require("node-fetch");
const router = require("express").Router();

// Set up api route
router.use('/api/gitinfo/:username', function (req, res) {
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
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
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
});

module.exports = router;