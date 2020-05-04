import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  IconButton,
  Card,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box overflow-hidden mb-4">
            <List className="py-0">
              <PerfectScrollbar className="scroll-area">
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'bell']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Sales
                      </div>
                      <small className="text-success">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="text-success mr-1"
                        />
                        <span>15.4% increase</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Income
                      </div>
                      <small className="text-danger">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-danger mr-1"
                        />
                        <span>5.2% decrease</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Expenses
                      </div>
                      <small className="text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="text-warning mr-1"
                        />
                        <span>5.2% down</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-success text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'cog']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Customers
                      </div>
                      <small className="text-danger">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-down']}
                          className="text-danger mr-1"
                        />
                        <span>32%</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'user']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Employees
                      </div>
                      <small className="text-dark">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-up']}
                          className="text-info mr-1"
                        />
                        <span>56% improvement</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
                <Divider />
                <ListItem button className="align-box-row">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-dark text-center text-white font-size-xl d-50 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'lightbulb']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold text-primary d-block">
                        Reports
                      </div>
                      <small className="text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'arrow-up']}
                          className="text-success mr-1"
                        />
                        <span>12.2% up</span>
                      </small>
                    </div>
                    <div className="ml-auto card-hover-indicator align-self-center">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-md"
                      />
                    </div>
                  </div>
                </ListItem>
              </PerfectScrollbar>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box overflow-hidden mb-4">
            <List>
              <PerfectScrollbar className="scroll-area">
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-danger">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Budget</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b>125</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$57.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-success">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Basic</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">3847</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$176.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-danger">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Premium</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">346</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$567.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-danger">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Ultra</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b className="pr-1">1,659</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$893.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
                  <span className="badge-circle mt-2 mr-2 align-self-start badge badge-success">
                    Basic
                  </span>
                  <div className="font-weight-bold flex-grow-1">
                    <div className="text-second font-size-lg">Ultra PRO</div>
                    <span className="opacity-8">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="mr-1"
                      />
                      <b>597</b>
                      subscribers
                    </span>
                  </div>
                  <div className="text-right hover-hide-wrapper">
                    <div className="font-weight-bold text-second">$475.00</div>
                    <span className="opacity-7">per month</span>
                  </div>
                  <div className="text-right hover-show-wrapper">
                    <Tooltip arrow title="View details">
                      <IconButton className="bg-white text-first d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Remove">
                      <IconButton className="bg-white text-danger d-40 rounded-circle ml-1">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-md mx-auto"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                </ListItem>
              </PerfectScrollbar>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
