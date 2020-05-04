import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  Card,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} xl={6}>
          <Card className="card-box mb-4">
            <div className="card-header bg-white">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Blogs</small>
                <b>Latest articles</b>
              </div>
              <div className="card-header--actions">
                <Button size="small" color="primary">
                  Reports
                </Button>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <ListItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock1}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            className="font-size-lg"
                            href="#/"
                            onClick={e => e.preventDefault()}>
                            Meeting minutes
                          </a>
                        </div>
                        <div>
                          <div className="text-info badge badge-neutral-info">
                            Articles
                          </div>
                          <div className="text-danger ml-2 badge badge-neutral-danger">
                            Posts
                          </div>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          A wonderful serenity has taken possession of my entire
                          soul, like these sweet mornings ...
                        </p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Fab
                                  size="small"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Fab>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock2}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            className="font-size-lg"
                            href="#/"
                            onClick={e => e.preventDefault()}>
                            Sales reports for this week
                          </a>
                        </div>
                        <div>
                          <div className="text-success badge badge-neutral-success">
                            Blog
                          </div>
                        </div>
                        <p className="mt-2 text-black-50">
                          Who formed us in his own image, and the breath ...
                        </p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Fab
                                  size="small"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Fab>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock3}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            className="font-size-lg"
                            href="#/"
                            onClick={e => e.preventDefault()}>
                            Marketing strategy
                          </a>
                        </div>
                        <div>
                          <div className="text-warning badge badge-neutral-warning">
                            SEO Stuff
                          </div>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          If several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual languages.
                        </p>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="bg-secondary card-footer text-center p-4">
              <Tooltip arrow title="Facebook">
                <Button size="small" color="default" className="text-facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'facebook']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
              </Tooltip>
              <Tooltip arrow title="Dribbble">
                <Button
                  size="small"
                  color="default"
                  className="text-dribbble mr-2 ml-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'dribbble']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
              </Tooltip>
              <Tooltip arrow title="Twitter">
                <Button size="small" color="default" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'twitter']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Card className="card-box mb-4">
            <div className="card-header bg-white pr-1">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Targets</small>
                <b>Monthly Stats</b>
              </div>
              <div className="card-header--actions">
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  className="mr-3">
                  Today
                </Button>
                <Button size="small" color="primary" className="mr-3">
                  Last week
                </Button>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <List>
                  <ListItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={stock1}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            Meeting minutes
                          </b>
                          <p className="text-black-50 mb-0">
                            Learn more about these example boxes.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">23 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={stock2}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            Sales reports for this week
                          </b>
                          <p className="text-black-50 mb-0">
                            The passage experienced a surge in popularity during
                            the 1960s.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">24 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={people3}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            SEO reports meeting
                          </b>
                          <p className="text-black-50 mb-0">
                            To an English person, it will seem like simplified
                            English, as a skeptical Cambridge.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">25 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex p-4 justify-content-between">
              <Button size="small" color="primary" variant="contained">
                View details
              </Button>
              <Button size="small" color="secondary" variant="contained">
                <span>Delete</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
