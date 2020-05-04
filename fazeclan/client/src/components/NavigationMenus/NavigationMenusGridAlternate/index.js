import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button } from '@material-ui/core';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <div className="heading-3 text-center">Three column grids</div>
          <Card className="card-box rounded-0 border-2 mb-3 mx-3">
            <div className="grid-menu grid-menu-3col">
              <Grid container spacing={0}>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'comment-dots']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Profiles</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Clients Details
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'keyboard']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Accounts</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Statistics
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'object-group']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Servers</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Uptime Status
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'user-circle']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">
                      Deliveries
                    </div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Status Report
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Car Fleet</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      View Details
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    color="default"
                    variant="outlined"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'building']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Income</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Annual Report
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="heading-3 text-center">Two column grids</div>
          <Card className="card-box rounded-0 border-2 mb-3 mx-3">
            <div className="grid-menu grid-menu-2col">
              <Grid container spacing={0}>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1 text-warning">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Reports</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Monthly Stats
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1 text-warning">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">
                      Statistics
                    </div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Customers stats
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1 text-warning">
                    <FontAwesomeIcon
                      icon={['far', 'eye']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Projects</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Manage servers
                    </div>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className="d-block border-0 w-100 rounded-0 py-4 px-1 text-warning">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Tasks</div>
                    <div className="font-size-sm mb-1 text-black-50">
                      Pending items
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <div className="d-flex flex-wrap">
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient text-white bg-night-sky text-left px-4 py-3 w-100 rounded-lg">
                <div>
                  <Settings className="h1 d-block my-2 text-warning" />
                  <div className="font-weight-bold">Reports</div>
                  <div className="font-size-sm text-capitalize mb-1 opacity-8">
                    Stats
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient text-white bg-midnight-bloom text-left px-4 py-3 w-100 rounded-lg">
                <div>
                  <Briefcase className="h1 d-block my-2 text-success" />
                  <div className="font-weight-bold">Statistics</div>
                  <div className="font-size-sm text-capitalize mb-1 opacity-8">
                    Customers
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient text-white bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg">
                <div>
                  <Users className="h1 d-block my-2 text-danger" />
                  <div className="font-weight-bold">Projects</div>
                  <div className="font-size-sm text-capitalize mb-1 opacity-8">
                    Servers
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient text-white bg-royal text-left px-4 py-3 w-100 rounded-lg">
                <div>
                  <Layers className="h1 d-block my-2 text-white" />
                  <div className="font-weight-bold">Tasks</div>
                  <div className="font-size-sm text-capitalize mb-1 opacity-8">
                    Items
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="d-flex flex-wrap">
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Settings className="h1 d-block my-2 text-warning" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Reports
                  </div>
                  <div className="font-size-sm mb-1 text-black-50">
                    Monthly Stats
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Briefcase className="h1 d-block my-2 text-success" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Statistics
                  </div>
                  <div className="font-size-sm mb-1 text-black-50">
                    Customers stats
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Users className="h1 d-block my-2 text-danger" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Projects
                  </div>
                  <div className="font-size-sm mb-1 text-black-50">
                    Manage servers
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Layers className="h1 d-block my-2 text-white" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Tasks
                  </div>
                  <div className="font-size-sm mb-1 text-black-50">
                    Pending items
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
