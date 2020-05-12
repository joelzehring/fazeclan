import React, { Component, useRef, useEffect } from 'react';
import * as d3 from "d3";
import "./CommitGraph.css";

const CommitGraph = (props) => {
    const ref = useRef();
    const { data } = props;
    const daysToShow = 60;
    const endDate = new Date();
    let startDate = new Date();
    startDate = startDate.setDate(startDate.getDate()-daysToShow);

    useEffect(() => {
        const svg = d3.select(ref.current)

        let dataset = data.map((item) => {
            return { x: new Date(item.date), y: item.contributionCount }
        });

        dataset = dataset.filter((value) => {
            return value.x > startDate;
        })

        // const xExtent = [new Date(dataset[0].x), new Date(dataset[dataset.length - 1].x)];

        const xExtent = [startDate, endDate];
        const yExtent = d3.extent(dataset.map((value) => value.y));

        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        const width = 800;
        // const width = window.innerWidth - margin.left - margin.right; // Use the window's width 
        const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

        const xScale = d3.scaleTime()
            .domain(xExtent) // input
            .range([0, width]); // output

        const yScale = d3.scaleLinear()
            .domain(yExtent) // input 
            .range([height, 0]); // output 

        // Generate Line
        const line = d3.line()
            .x(function (d) { return xScale(d.x); })
            .y(function (d) { return yScale(d.y); })
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        // Setup SVG
        svg
            .attr("width", width + margin.left + margin.right + 100)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "user-graph")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // X Axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

        // Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

        // Add the path (the line)
        const path = svg.append("path")
            .style("fill", "none")
            .style("stroke", "#000")
            .datum(dataset)
            .attr("class", "line") // Assign a class for styling 
            .attr("d", line) // Calls the line generator 


        // console.log(totalLength);
        // Add dots
        svg.selectAll(".dot")
            .data(dataset)
            .enter().append("circle") // Uses the enter().append() method
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", function (d, i) { return xScale(new Date(d.x)) })
            .attr("cy", function (d) { return yScale(d.y) })
            .attr("r", 5)
            .on("mouseover", function (a, b, c) {
                console.log(a)
            })
            .on("mouseout", function () {

            })
        console.log("path: ", path)
        const totalLength = path.node().getTotalLength();
        path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .delay(1000)
            .duration(20000)
            .attr("stroke-dashoffset", 0)
            // .ease("easeLinear");


    });
    return (
        <div className="graphHolder">
        <h1 className="graphLabel">Your Recent Commit Contribution History</h1>
        <svg ref={ref} />
        </div>
    )
}

export default CommitGraph;