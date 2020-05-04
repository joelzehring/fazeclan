import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Grid, Avatar, Card, Button, List, ListItem } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import CountUp from 'react-countup';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box overflow-hidden mb-4">
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <List className="py-0">
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={83.2} // Number: Update to change the progress and percentage.
                        progressColor="#f83245" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$168</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={587}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-danger pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={54.2} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shawn Galloway
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$567</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={73.8} // Number: Update to change the progress and percentage.
                        progressColor="#1bc943" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Latisha Allison
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$937</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={762}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={83.7} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Lilly-Mae White
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$367</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={5743}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-warning pl-2">
                        <FontAwesomeIcon
                          icon={['far', 'dot-circle']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={87.9} // Number: Update to change the progress and percentage.
                        progressColor="#edeef1" // String: Color of "progress" portion of circle.
                        bgColor="#5383ff" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Julie Prosser
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$283</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 px-3">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={54} // Number: Defines the size of the circle.
                        lineWidth={23} // Number: Defines the thickness of the circle's stroke.
                        progress={46} // Number: Update to change the progress and percentage.
                        progressColor="#f4772e" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        roundedStroke={true}
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Amin Hamer
                        </a>
                        <div>
                          <span className="badge badge-neutral-dark">$793</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-black font-size-lg d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={1587}
                          duration={6}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <span className="text-danger pl-2">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </li>
                </List>
              </PerfectScrollbar>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box overflow-hidden mb-4">
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <List className="py-0">
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Izabela Rodriquez
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar6} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Autumn Ballard
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar7} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Niyah Crossley
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Caspar Hough
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="ml-4">
                      View
                    </Button>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box overflow-hidden mb-4">
            <div className="scroll-area shadow-overflow mb-3">
              <PerfectScrollbar>
                <List className="py-0">
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                        progress={63} // Number: Update to change the progress and percentage.
                        progressColor="#f83245" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={587}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-danger pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                        progress={91} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shawn Galloway
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={76} // Number: Update to change the progress and percentage.
                        progressColor="1bc943" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Latisha Allison
                        </a>
                        <span className="text-black-50 d-block">
                          UX Designer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={762}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={49} // Number: Update to change the progress and percentage.
                        progressColor="#4491ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Lilly-Mae White
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={5743}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-warning pl-1">
                        <FontAwesomeIcon
                          icon={['far', 'dot-circle']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={87} // Number: Update to change the progress and percentage.
                        progressColor="#5383ff" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Julie Prosser
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Engineer
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={3463}
                          duration={4}
                          separator=""
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=""
                        />
                      </span>
                      <span className="text-success pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                  <ListItem className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                      <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="3s" //String: Length of animation
                        responsive={false} // Boolean: Make SVG adapt to parent size
                        size={64} // Number: Defines the size of the circle.
                        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                        progress={46} // Number: Update to change the progress and percentage.
                        progressColor="#f4772e" // String: Color of "progress" portion of circle.
                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                        textStyle={{
                          fontSize: '60px',
                          fontWeight: 'bold'
                        }}
                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                        showPercentage={true} // Boolean: Show/hide percentage.
                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                      />
                      <div className="pb-1 pl-3">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Amin Hamer
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                    <div className="text-black-50 d-flex align-items-center">
                      <small className="opacity-6 pr-1">$</small>
                      <span>
                        <CountUp
                          start={0}
                          end={1587}
                          duration={6}
                          deplay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <span className="text-danger pl-1">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-down']}
                          className="font-size-sm"
                        />
                      </span>
                    </div>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
