import React, { Fragment } from 'react';

import {
  Grid,
  Avatar,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <List className="py-0">
              <ListItem className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-70">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar6} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kate Winchester
                    </a>
                    <span className="text-black-50 d-block">
                      Freelance Designer, Mutual Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        variant="determinate"
                        className="flex-grow-1 progress-animated-alt"
                        color="primary"
                        value={56}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        56%
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="avatar-icon-wrapper rounded-circle mr-3"
                    title="Online">
                    <span className="badge-position badge-position--bottom-center badge-circle badge badge-success">
                      Online
                    </span>
                    <div className="rounded-circle overflow-hidden d-70 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                      <span>KA</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kris Alexander
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Apple Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        variant="determinate"
                        className="flex-grow-1"
                        color="secondary"
                        value={42}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        42%
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-70">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Matteo Mcphee
                    </a>
                    <span className="text-black-50 d-block">
                      Frontend Developer, Stripe Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <LinearProgress
                        variant="determinate"
                        className="flex-grow-1"
                        color="primary"
                        value={31}
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        31%
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <List className="py-0">
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar1} className="mr-2" />
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress color="primary" value={52} />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar2} className="mr-2" />
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="primary"
                          value={38}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar3} className="mr-2" />
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={34}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar4} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Freya Nieves
                        </a>
                        <span className="text-black-50 d-block">
                          Superviser, Walmart
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={239}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="secondary"
                          value={51}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem className="py-3">
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar alt="..." src={avatar5} className="mr-2" />
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Elina Gould
                        </a>
                        <span className="text-black-50 d-block">
                          Java Developer, Netflix
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <span className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={345}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </span>
                          </div>
                        </div>
                        <LinearProgress
                          className="progress-sm"
                          color="primary"
                          value={63}
                        />
                      </div>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
