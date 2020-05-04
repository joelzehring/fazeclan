import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import CountUp from 'react-countup';
import Circle from 'react-circle';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <List className="py-0">
          <ListItem className="p-0 d-block">
            <div className="card-header">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#34</span> Hackathon
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <AvatarGroup>
                  <Avatar alt="..." src={avatar1} />
                  <Avatar alt="..." src={avatar2} />
                  <Avatar alt="..." src={avatar3} />
                  <Avatar alt="..." src={avatar4} />
                  <Tooltip title="Shanelle Wynn • Beck Simpson">
                    <Avatar>+2</Avatar>
                  </Tooltip>
                </AvatarGroup>
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="ml-3">
                    <AddCircleTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-danger">-12</span>
                    </div>
                    <LinearProgress value={43} />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </ListItem>
          <Divider />
          <ListItem className="p-0 d-block">
            <div className="card-header">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#33</span> Gaming center
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <AvatarGroup>
                  <Avatar alt="..." src={avatar1} />
                  <Avatar alt="..." src={avatar2} />
                  <Avatar alt="..." src={avatar3} />
                  <Avatar alt="..." src={avatar4} />
                  <Tooltip title="Shanelle Wynn • Beck Simpson">
                    <Avatar>+2</Avatar>
                  </Tooltip>
                </AvatarGroup>
                <Tooltip arrow title="View all participants">
                  <IconButton color="primary" className="ml-3">
                    <AddCircleTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <CardContent className="p-3">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">1,466</b>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl text-danger">$6,465</b>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1">
                      <span className="text-black-50">Progress:</span>
                      <span className="text-warning">-5</span>
                    </div>
                    <LinearProgress value={72} />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </ListItem>
        </List>
      </Card>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box rounded-sm">
            <div className="pt-3 px-3">
              <div className="d-flex align-items-center">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={64} // Number: Defines the size of the circle.
                  lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                  progress={75} // Number: Update to change the progress and percentage.
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
                <div className="pl-3">
                  <div className="text-black-50">Stocks trading</div>
                  <div className="font-weight-bold display-4 py-1 text-success">
                    $
                    <span>
                      <CountUp
                        start={0}
                        end={23.874}
                        duration={6}
                        deplay={2}
                        separator=""
                        prefix=""
                        suffix="%"
                        decimals={0}
                        decimal=","
                      />
                    </span>
                  </div>
                  <div className="text-black-50 font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-up']}
                      className="font-size-sm pr-1"
                    />
                    15% increase compared to 2020
                  </div>
                </div>
              </div>
            </div>
            <Divider className="mt-3" />
            <div className="p-3">
              <div className="d-flex align-items-center">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={64} // Number: Defines the size of the circle.
                  lineWidth={24} // Number: Defines the thickness of the circle's stroke.
                  progress={52} // Number: Update to change the progress and percentage.
                  progressColor="#4191ff" // String: Color of "progress" portion of circle.
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
                <div className="pl-3">
                  <div className="text-black-50">Trading overview</div>
                  <div className="font-weight-bold text-first display-4 py-1">
                    $
                    <span>
                      <CountUp
                        start={0}
                        end={75.326}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </span>
                  </div>
                  <div className="opacity-7 font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-up']}
                      className="font-size-sm pr-1"
                    />
                    22% more profit this year
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={['far', 'comment-dots']}
                  className="font-size-lg d-block mr-3 text-dark opacity-5"
                />
                <b className="text-dark">Reports</b>
              </div>
              <div className="font-weight-bold text-danger font-size-lg">
                <CountUp
                  start={0}
                  end={2.363}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
            <Divider />
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={['far', 'chart-bar']}
                  className="font-size-lg d-block mr-3 text-dark opacity-5"
                />
                <b className="text-dark">User</b>
              </div>
              <div className="font-weight-bold text-success font-size-lg">
                <CountUp
                  start={0}
                  end={563}
                  duration={6}
                  deplay={2}
                  separator=""
                  prefix="+"
                  suffix="%"
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
            <Divider />
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={['far', 'address-card']}
                  className="font-size-lg d-block mr-3 text-dark opacity-5"
                />
                <b className="text-dark">Sales</b>
              </div>
              <div className="font-weight-bold text-warning font-size-lg">
                <CountUp
                  start={0}
                  end={483}
                  duration={6}
                  deplay={2}
                  separator=""
                  decimals={0}
                  decimal=","
                />
              </div>
            </div>
            <Divider />
            <div className="d-flex align-items-center justify-content-between px-4 py-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={['far', 'object-group']}
                  className="font-size-lg d-block mr-3 text-dark opacity-5"
                />
                <b className="text-dark">Stats</b>
              </div>
              <div className="font-weight-bold text-first font-size-lg">
                {' '}
                $1,23M
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
