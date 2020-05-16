import axios from "axios";

export default {
    getGraphQL: function(username) {
        return axios.get("/api/gitinfo/" + username)
    }
}