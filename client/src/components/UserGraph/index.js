import React, { Component } from 'react';
import API from "../../utils/api";
import { AuthContext } from "../../contexts/AuthContext";
import * as d3 from "d3";
import GraphData from "../CommitGraph"
import CommitGraph from '../CommitGraph';


class UserGraph extends Component {

    render() {
        const { userProfile } = this.context;
        const { contributionsCollection } = userProfile;
        console.log("user profile: ", userProfile);
        let data = [];
        if (userProfile && contributionsCollection) {
            const weeks = userProfile.contributionsCollection.contributionCalendar.weeks;
            weeks.forEach((week) => {
                data = data.concat(week.contributionDays);
            })
        }
        return (
            <div>
                {contributionsCollection && <CommitGraph data={data} />}
            </div>
        )
    }
}



UserGraph.contextType = AuthContext;

export default UserGraph