import React, { Component } from 'react';
import API from "../../utils/api";
import { AuthContext } from "../../contexts/AuthContext";
import * as d3 from "d3";


class UserGraph extends Component {

    componentDidMount() {
        const { userProfile } = this.context;

        console.log("userprofile: ", userProfile);

    }

    componentDidUpdate() {
        // const { userProfile } = this.context;
        // console.log("updateProfile: ", userProfile);

        // const weeks = userProfile.contributionsCollection.contributionCalendar.weeks;
        // console.log("weeks: ", weeks);

        // const data = [];
        // const weekArray =[];

        // for (var i = 0; i < weeks.length; i++) {
        //    weekArray.push(weeks[i])
        //     for (var j = 0; j < weekArray.contributionDays.length; j++) {
        //         data.push(weekArray[j]);
        //     }
        // }
        // console.log("week Array: ", weekArray)
        // console.log("data: ", data);
        // const data = [
        //     {
        //         "date": "2020-05-03T00:00:00.000+00:00",
        //         "contributionCount": 0
        //     },
        //     {
        //         "date": "2020-05-04T00:00:00.000+00:00",
        //         "contributionCount": 0
        //     },
        //     {
        //         "date": "2020-05-05T00:00:00.000+00:00",
        //         "contributionCount": 11
        //     },
        //     {
        //         "date": "2020-05-06T00:00:00.000+00:00",
        //         "contributionCount": 4
        //     },
        //     {
        //         "date": "2020-05-07T00:00:00.000+00:00",
        //         "contributionCount": 8
        //     },
        //     {
        //         "date": "2020-05-08T00:00:00.000+00:00",
        //         "contributionCount": 0
        //     }
        // ];


        // const dataset = data.map((item) => {
        //     return { x: item.date, y: item.contributionCount }
        // });

        // console.log(dataset);

        // const xExtent = [new Date(dataset[0].x), new Date(dataset[dataset.length - 1].x)];
        // const yExtent = d3.extent(dataset.map((value) => value.y));

        // const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        // const width = window.innerWidth - margin.left - margin.right; // Use the window's width 
        // const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

        // const xScale = d3.scaleTime()
        //     .domain(xExtent) // input
        //     .range([0, width]); // output

        // const yScale = d3.scaleLinear()
        //     .domain(yExtent) // input 
        //     .range([height, 0]); // output 

        // // Generate Line
        // const line = d3.line()
        //     .x(function (d) { return xScale(new Date(d.x)); })
        //     .y(function (d) { return yScale(d.y); })
        //     .curve(d3.curveMonotoneX) // apply smoothing to the line

        // // Setup SVG
        // const svg = d3.select("body").append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // // X Axis
        // svg.append("g")
        //     .attr("class", "x axis")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

        // // Y Axis
        // svg.append("g")
        //     .attr("class", "y axis")
        //     .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

        // // Add the path
        // const path = svg.append("path")
        //     .style("fill", "none")
        //     .style("stroke", "#000")
        //     .datum(dataset)
        //     .attr("class", "line") // Assign a class for styling 
        //     .attr("d", line) // 11. Calls the line generator 

        // const totalLength = path.node().getTotalLength();
        // console.log(totalLength);
        // // Add dots
        // svg.selectAll(".dot")
        //     .data(dataset)
        //     .enter().append("circle") // Uses the enter().append() method
        //     .attr("class", "dot") // Assign a class for styling
        //     .attr("cx", function (d, i) { return xScale(new Date(d.x)) })
        //     .attr("cy", function (d) { return yScale(d.y) })
        //     .attr("r", 5)
        //     .on("mouseover", function (a, b, c) {
        //         console.log(a)
        //     })
        //     .on("mouseout", function () {

        //     })

        // path
        //     .attr("stroke-dasharray", totalLength + " " + totalLength)
        //     .attr("stroke-dashoffset", totalLength)
        //     .transition()
        //     .duration(2000)
        //     .attr("stroke-dashoffset", 0)
        //     .ease("easeLinear");

    }


    render() {
        return (null);

    }
}



UserGraph.contextType = AuthContext;

export default UserGraph