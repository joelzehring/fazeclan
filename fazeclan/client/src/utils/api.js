import axios from "axios";

export default {
    getGraphQL: function(username) {
        console.log("username: ", username);
        return axios.get("/api/gitinfo/" + username)
    }
}