import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchUser: function(query) {
    return axios.get("/api/gitinfo/:username");
  },
   // Gets the book with the given id
   getUser: function(id) {
    return axios.get("/api/user" + id);
  },
  // Saves a book to the database
  udateUser: function(userData) {
    return axios.post("/api/user/", userData);
  }
};
