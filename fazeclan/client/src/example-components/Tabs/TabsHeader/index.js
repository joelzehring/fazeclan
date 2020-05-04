import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Fab,
  Box,
  Typography,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const LivePreviewExample = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header py-0 pr-0 pl-4">
              <div className="card-header--title">
                <b>Monthly targets</b>
                <div className="d-block text-capitalize mt-1 font-size-sm">
                  Card with progress bars
                </div>
              </div>
              <div className="card-header--actions">
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  onChange={handleChange}>
                  <Tab className="text-capitalize p-4" label="Week" />
                  <Tab className="text-capitalize p-4" label="Month" />
                </Tabs>
              </div>
            </div>
            <TabPanel value={value} index={0}>
              <List>
                <ListItem className="py-2 d-block">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Orders</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-success">
                        348
                      </div>
                    </div>
                  </div>
                  <LinearProgress
                    className="progress-animated-alt"
                    color="secondary"
                    value={34}
                  />
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListItem>
                <ListItem className="py-2 d-block">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Sales</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-danger">
                        <small>$</small>
                        2.3M
                      </div>
                    </div>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    color="primary"
                    value={39}
                  />
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListItem>
                <ListItem className="py-2 d-block">
                  <div className="align-box-row mb-1">
                    <div>
                      <div className="font-weight-bold">Users</div>
                    </div>
                    <div className="ml-auto">
                      <div className="font-size-xl font-weight-bold text-info">
                        <small>#</small>
                        87
                      </div>
                    </div>
                  </div>
                  <LinearProgress
                    className="progress-animated-alt"
                    color="primary"
                    value={51}
                  />
                  <div className="align-box-row progress-bar--label mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <div className="ml-auto">100%</div>
                  </div>
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List>
                <ListItem className="d-block">
                  <div className="align-box-row">
                    <div className="mr-4">
                      <Tooltip arrow title="View details" placement="right">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </a>
                      </Tooltip>
                    </div>
                    <div className="flex-grow-1">
                      <LinearProgress
                        color="secondary"
                        variant="determinate"
                        value={61}
                      />
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-success">
                        <small className="pr-1 text-black-50">$</small>
                        1,628
                      </b>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="d-block">
                  <div className="align-box-row">
                    <div className="mr-4">
                      <Tooltip arrow title="View details" placement="right">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar5} />
                          </div>
                        </a>
                      </Tooltip>
                    </div>
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        color="primary"
                        value={44}
                      />
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-info">
                        <small className="text-black-50 pr-1">$</small>
                        7,389
                      </b>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="d-block">
                  <div className="align-box-row">
                    <div className="mr-4">
                      <Tooltip arrow title="View details" placement="right">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </a>
                      </Tooltip>
                    </div>
                    <div className="flex-grow-1">
                      <LinearProgress
                        color="primary"
                        variant="determinate"
                        value={29}
                      />
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-danger">
                        <small className="text-black-50 pr-1">$</small>
                        8,493
                      </b>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="d-block">
                  <div className="align-box-row">
                    <div className="mr-4">
                      <Tooltip arrow title="View details" placement="right">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </a>
                      </Tooltip>
                    </div>
                    <div className="flex-grow-1">
                      <LinearProgress
                        color="secondary"
                        variant="determinate"
                        value={38}
                      />
                    </div>
                    <div className="line-height-sm text-center ml-4">
                      <small className="text-black-50 d-block text-uppercase">
                        Totals
                      </small>
                      <b className="font-size-lg text-warning">
                        <small className="text-black-50 pr-1">$</small>
                        2,594
                      </b>
                    </div>
                  </div>
                </ListItem>
              </List>
            </TabPanel>

            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <ListItem className="d-flex justify-content-between align-items-center">
              <div className="avatar-icon-wrapper avatar-icon-lg">
                <div className="avatar-icon rounded">
                  <img alt="..." src={avatar1} />
                </div>
              </div>
              <div className="flex-grow-1 pl-2">
                <h5 className="mt-0 mb-1">Kate Middleton</h5>
                <p className="card-text mb-0">
                  This is a short profile bio description...
                </p>
              </div>
              <span className="pl-3">
                <Fab size="small" color="secondary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'cog']} />
                  </span>
                </Fab>
              </span>
            </ListItem>
            <Divider />
            <div className="card-header bg-white card-header-tab pb-0 px-0">
              <div className="card-header--title">
                <Tabs
                  value={value}
                  indicatorColor="secondary"
                  textColor="primary"
                  variant="fullWidth"
                  onChange={handleChange}>
                  <Tab className="p-3" label="Earnings" />
                  <Tab className="p-3" label="Sales" />
                </Tabs>
              </div>
            </div>
            <CardContent className="p-0">
              <TabPanel value={value} index={0}>
                <Grid container spacing={4} className="mt-3">
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">2,345</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'gem']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div className="divider mt-3 mb-2" />
                <div className="text-center pb-1">
                  <Button
                    color="primary"
                    variant="contained"
                    className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl"
                    />
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded">
                    <FontAwesomeIcon
                      icon={['far', 'keyboard']}
                      className="font-size-xxl"
                    />
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded">
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xxl"
                    />
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={4} className="mt-3">
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">565</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'gem']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">3,568</b>
                        <span className="text-black-50 d-block">clicks</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div className="divider mt-3 mb-2" />
                <div className="text-center pb-1">
                  <Button
                    color="primary"
                    className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded align-items-center justify-content-center"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="font-size-xxl"
                    />
                  </Button>
                  <Button
                    color="primary"
                    className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded align-items-center justify-content-center"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="font-size-xxl"
                    />
                  </Button>
                  <Button
                    color="primary"
                    className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded align-items-center justify-content-center"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['far', 'building']}
                      className="font-size-xxl"
                    />
                  </Button>
                </div>
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LivePreviewExample;
