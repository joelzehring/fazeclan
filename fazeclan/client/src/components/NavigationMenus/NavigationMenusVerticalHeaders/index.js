import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-dark">
              <div className="bg-composed-wrapper--image bg-composed-img-1" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <List className="py-0">
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-pdf']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Adobe_file.pdf
                  <span className="text-info ml-2 badge badge-neutral-info">
                    New
                  </span>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-word']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Word_file.docx
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Excel_doc.csv
                  <span className="text-success ml-2 badge badge-neutral-success">
                    Draft
                  </span>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <ListItem button className="align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Archive_docs.zip
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListItem>
              <Divider />
              <ListItem
                button
                className="d-flex justify-content-center text-center">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted mr-3"
                />
                <div className="text-primary">
                  Show all files <b>(93)</b>
                </div>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted ml-3"
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-malibu-beach">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <List className="py-0">
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
                      className="font-size-xl"
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
                      className="font-size-xl"
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
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button size="small" color="primary" variant="contained">
                View details
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-danger">
              <div className="bg-composed-wrapper--image bg-composed-img-3" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <List className="nav-primary flex-column p-3">
              <ListItem button className="rounded-pill">
                <span>My Account</span>
              </ListItem>
              <ListItem button className="rounded-pill">
                <span>Profile settings</span>
                <span className="ml-auto badge badge-first">23</span>
              </ListItem>
              <ListItem button className="rounded-pill">
                <span>Active tasks</span>
              </ListItem>
              <Typography
                className="text-black py-2 px-3 font-weight-bold"
                variant="body2"
                component="div">
                Heading
              </Typography>
              <ListItem button className="rounded-pill">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </ListItem>
              <ListItem button className="rounded-pill">
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <div className="divider mb-4" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-plum-plate">
              <div className="bg-composed-wrapper--image bg-composed-img-4" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (xs)
                </p>
              </div>
            </div>
            <div className="scroll-area-xs shadow-overflow">
              <PerfectScrollbar>
                <List className="nav-danger flex-column p-3">
                  <ListItem button>
                    <span>My Account</span>
                  </ListItem>
                  <ListItem button>
                    <span>Profile settings</span>
                    <span className="ml-auto badge badge-success">New</span>
                  </ListItem>
                  <ListItem button>
                    <span>Active tasks</span>
                  </ListItem>
                  <Typography
                    className="text-black py-2 px-3 font-weight-bold"
                    variant="body2"
                    component="div">
                    Heading
                  </Typography>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                    <span>Customers</span>
                  </ListItem>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </div>
                    <span>Statistics</span>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button size="small" color="primary">
                Action
              </Button>
              <Button size="small" color="primary" className="text-danger">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-vicious-stance">
              <div className="bg-composed-wrapper--image bg-composed-img-5" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (sm)
                </p>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <List className=" flex-column py-2">
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </ListItem>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </div>
                    <span>Layouts</span>
                    <span className="ml-auto badge badge-warning">512</span>
                  </ListItem>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </div>
                    <span>Reports</span>
                  </ListItem>
                  <Typography className="text-black py-2 px-3" component="div">
                    Others
                  </Typography>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <span>Components</span>
                  </ListItem>
                  <ListItem button>
                    <div className="nav-link-icon opacity-6">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </ListItem>
                </List>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button size="small" variant="outlined" color="secondary">
                Action
              </Button>
              <Button color="primary" variant="contained" size="small">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="bg-composed-wrapper bg-midnight-bloom">
              <div className="bg-composed-wrapper--image" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (lg)
                </p>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-lg shadow-overflow">
              <List className="p-3">
                <ListItem button>
                  <span>My Account</span>
                </ListItem>
                <ListItem button>
                  <span>Profile settings</span>
                  <span className="ml-auto badge badge-first">23</span>
                </ListItem>
                <ListItem button>
                  <span>Active tasks</span>
                </ListItem>
                <ListItem
                  button
                  className="nav-item--header text-first font-weight-bold">
                  <span>Heading</span>
                </ListItem>
                <ListItem button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                  <span>Customers</span>
                </ListItem>
                <ListItem button>
                  <span>Profile settings</span>
                  <span className="ml-auto badge badge-first">23</span>
                </ListItem>
                <ListItem button>
                  <span>Active tasks</span>
                </ListItem>
                <ListItem button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                  <span>Statistics</span>
                </ListItem>
              </List>
            </PerfectScrollbar>
            <div className="card-footer d-flex justify-content-between">
              <Button size="small" variant="outlined" color="secondary">
                Action
              </Button>
              <Button size="small" color="primary" className="text-warning">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
