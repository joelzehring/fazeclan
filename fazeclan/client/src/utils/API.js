import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchUser: function(query) {
    return axios.get("/api/gitinfo/:username");
  },
   // Gets the book with the given id
   getUser: function(username) {
     console.log(username);
    return axios.get("/api/user/" + username);
  },
  // Saves a book to the database
  udateUser: function(username, userData) {
    return axios.post("/api/user/" + username, userData);
  },
  getUsername: function() {
    return axios.get("/login/success");
  }
};
