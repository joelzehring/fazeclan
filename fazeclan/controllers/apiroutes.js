const axios = require("../client/node_modules/axios");

function apiRoute(app) {
    app.get("/api/github/:user", function (req, res) {
        axios({
            url: "https://api.github.com/graphql",
            method: "POST",
            data: {
                viewer: {
                    login: "sharkrachel",
                    contributionsCollection: {
                        totalCommitContributions: 442
                    }
                }
            }
        })
            .then((result) => {
                console.log(result.data);
            });

    })
}

module.exports = apiRoute;


// API CALL TO GET NUMBER OF COMMITS THROUGH REST API

// function apiRoutes(app) {
//     var user = req.params.user;
//     var userData = {};
//     var numberOfCommits = 0;
//     app.get("https://api.github.com/users/" + user)
//         .then(function (response) {
//             userData.userName = user;
//             userData.public_repos = response.data.public_repos
//             userData.followers = response.data.followers;
//             axios.get(`https://api.github.com/users/${user}/repos`)
//                 .then(function (response) {

//                     console.log(response.data);
//                     for (var i = 0; i < response.data.length; i++) {

//                         axios.get(`https://api.github.com/repos/${user}/${response.data[i].name}/commits`)
//                             .then(function (response) {
//                                 numberOfCommits += response.data.length
//                             })
//                     }
//                     userData.numberOfCommits = numberOfCommits;
//                     res.json(userData);
//                 });
//         })
// }