import axios from "axios";

export default {
    getGraphQL: function(username) {
        console.log("username: ", username);
        return axios.get("http://localhost:3001/api/gitinfo/" + username)
    }
}