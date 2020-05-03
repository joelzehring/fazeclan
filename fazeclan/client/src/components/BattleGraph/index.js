import React, { useRef, useEffect } from "react";
import { select, scaleBand, scaleLinear, max } from "d3";
import useResizeObserver from "./usResizeObserver";


function RacingBarChart({ data }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);


    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);
        if (!dimensions) return;


        // sorting the data
        data.sort((a, b) => b.value - a.value);

        // draw the bars
        const yScale = scaleBand()
        .domain(data.map((value, index) => index))
        .range([0, dimensions.height]);

        const xScale = scaleLinear()
        .domain([0, max(data, entry => entry.value)])
        .range([0, dimensions.width]);

        // draw the bars

        svg.selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("width", entry => xScale(entry.value));

    }, [data, dimentions]);





    return (
        <div ref={wrapperRef} style={{ marginBottom: "2rem" }} >
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default RacingBarChart;

