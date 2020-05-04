import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import Circle from 'react-circle';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4} className="text-center mb-3">
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" // String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size="100" // String: Defines the size of the circle.
              lineWidth="25" // String: Defines the thickness of the circle's stroke.
              progress="25" // String: Update to change the progress and percentage.
              progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
              bgColor="#ecedf0" // String: Color of "empty" portion of circle.
              textColor="#6b778c" // String: Color of percentage text color.
              textStyle={{
                font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" // String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size="100" // String: Defines the size of the circle.
              lineWidth="25" // String: Defines the thickness of the circle's stroke.
              progress="25" // String: Update to change the progress and percentage.
              progressColor="#d92550" // String: Color of "progress" portion of circle.
              bgColor="#ecedf0" // String: Color of "empty" portion of circle.
              textColor="#d92550" // String: Color of percentage text color.
              textStyle={{
                font: 'bold 3rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" // String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size="60" // String: Defines the size of the circle.
              lineWidth="20" // String: Defines the thickness of the circle's stroke.
              progress="56" // String: Update to change the progress and percentage.
              progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
              bgColor="#ecedf0" // String: Color of "empty" portion of circle.
              textColor="#6b778c" // String: Color of percentage text color.
              percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={false} // Boolean: Show/hide percentage.
              showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
      </Grid>

      <div className="divider my-2" />

      <Grid container spacing={4} className="text-center">
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="3s" //String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size={190} // Number: Defines the size of the circle.
              lineWidth={14} // Number: Defines the thickness of the circle's stroke.
              progress={87.9} // Number: Update to change the progress and percentage.
              progressColor="#1bc943" // String: Color of "progress" portion of circle.
              bgColor="#d1d2db" // String: Color of "empty" portion of circle.
              textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true}
              textStyle={{
                fontSize: '80px'
              }} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="3s" //String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size={180} // Number: Defines the size of the circle.
              lineWidth={14} // Number: Defines the thickness of the circle's stroke.
              progress={87.9} // Number: Update to change the progress and percentage.
              progressColor="#f4772e" // String: Color of "progress" portion of circle.
              bgColor="##d1d2db" // String: Color of "empty" portion of circle.
              textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true}
              textStyle={{
                fontSize: '60px',
                fontWeight: 'bold'
              }} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          className="d-flex align-items-center justify-content-center">
          <div className="p-3">
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="3s" //String: Length of animation
              responsive={false} // Boolean: Make SVG adapt to parent size
              size={160} // Number: Defines the size of the circle.
              lineWidth={14} // Number: Defines the thickness of the circle's stroke.
              progress={67.9} // Number: Update to change the progress and percentage.
              progressColor="#4191ff" // String: Color of "progress" portion of circle.
              bgColor="#d1d2db" // String: Color of "empty" portion of circle.
              textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true}
              textStyle={{
                fontSize: '60px',
                fontWeight: 'bold'
              }} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
