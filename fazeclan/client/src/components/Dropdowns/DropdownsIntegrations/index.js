import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  IconButton,
  Box,
  Typography,
  LinearProgress,
  Badge,
  Card,
  CardContent,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import Chart from 'react-apexcharts';

import IosFlame from 'react-ionicons/lib/IosFlame';
import IosImages from 'react-ionicons/lib/IosImages';
import IosPeople from 'react-ionicons/lib/IosPeople';
import IosApps from 'react-ionicons/lib/IosApps';

import { withStyles } from '@material-ui/core/styles';

const chart30Options = {
  chart: {
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#3c44b1'],
  stroke: {
    color: '#4191ff',
    curve: 'smooth',
    width: 4
  },
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  yaxis: {
    min: 0
  },
  legend: {
    show: false
  }
};

const chart30Data = [
  {
    name: 'Customers',
    data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
  }
];

const StyledBadge = withStyles({
  badge: {
    backgroundColor: 'var(--success)',
    color: 'var(--success)',
    boxShadow: '0 0 0 2px #fff',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
})(Badge);
export default function LivePreviewExample() {
  const [anchorElMenu1, setAnchorElMenu1] = React.useState(null);
  const [anchorElMenu2, setAnchorElMenu2] = React.useState(null);
  const [anchorElMenu3, setAnchorElMenu3] = React.useState(null);
  const [anchorElMenu4, setAnchorElMenu4] = React.useState(null);
  const [anchorElMenu5, setAnchorElMenu5] = React.useState(null);
  const [anchorElMenu6, setAnchorElMenu6] = React.useState(null);
  const [anchorElMenu7, setAnchorElMenu7] = React.useState(null);
  const [anchorElMenu8, setAnchorElMenu8] = React.useState(null);
  const [anchorElMenu9, setAnchorElMenu9] = React.useState(null);
  const [anchorElMenu10, setAnchorElMenu10] = React.useState(null);
  const [anchorElMenu11, setAnchorElMenu11] = React.useState(null);
  const [anchorElMenu12, setAnchorElMenu12] = React.useState(null);
  const [anchorElMenu13, setAnchorElMenu13] = React.useState(null);
  const [anchorElMenu14, setAnchorElMenu14] = React.useState(null);
  const [anchorElMenu15, setAnchorElMenu15] = React.useState(null);

  const handleClickMenu1 = event => {
    setAnchorElMenu1(event.currentTarget);
  };
  const handleCloseMenu1 = () => {
    setAnchorElMenu1(null);
  };

  const handleClickMenu2 = event => {
    setAnchorElMenu2(event.currentTarget);
  };
  const handleCloseMenu2 = () => {
    setAnchorElMenu2(null);
  };

  const handleClickMenu3 = event => {
    setAnchorElMenu3(event.currentTarget);
  };
  const handleCloseMenu3 = () => {
    setAnchorElMenu3(null);
  };

  const handleClickMenu4 = event => {
    setAnchorElMenu4(event.currentTarget);
  };
  const handleCloseMenu4 = () => {
    setAnchorElMenu4(null);
  };

  const handleClickMenu5 = event => {
    setAnchorElMenu5(event.currentTarget);
  };
  const handleCloseMenu5 = () => {
    setAnchorElMenu5(null);
  };

  const handleClickMenu6 = event => {
    setAnchorElMenu6(event.currentTarget);
  };
  const handleCloseMenu6 = () => {
    setAnchorElMenu6(null);
  };

  const handleClickMenu7 = event => {
    setAnchorElMenu7(event.currentTarget);
  };
  const handleCloseMenu7 = () => {
    setAnchorElMenu7(null);
  };

  const handleClickMenu8 = event => {
    setAnchorElMenu8(event.currentTarget);
  };
  const handleCloseMenu8 = () => {
    setAnchorElMenu8(null);
  };

  const handleClickMenu9 = event => {
    setAnchorElMenu9(event.currentTarget);
  };
  const handleCloseMenu9 = () => {
    setAnchorElMenu9(null);
  };

  const handleClickMenu10 = event => {
    setAnchorElMenu10(event.currentTarget);
  };
  const handleCloseMenu10 = () => {
    setAnchorElMenu10(null);
  };

  const handleClickMenu11 = event => {
    setAnchorElMenu11(event.currentTarget);
  };
  const handleCloseMenu11 = () => {
    setAnchorElMenu11(null);
  };

  const handleClickMenu12 = event => {
    setAnchorElMenu12(event.currentTarget);
  };
  const handleCloseMenu12 = () => {
    setAnchorElMenu12(null);
  };

  const handleClickMenu13 = event => {
    setAnchorElMenu13(event.currentTarget);
  };
  const handleCloseMenu13 = () => {
    setAnchorElMenu13(null);
  };

  const handleClickMenu14 = event => {
    setAnchorElMenu14(event.currentTarget);
  };
  const handleCloseMenu14 = () => {
    setAnchorElMenu14(null);
  };

  const handleClickMenu15 = event => {
    setAnchorElMenu15(event.currentTarget);
  };
  const handleCloseMenu15 = () => {
    setAnchorElMenu15(null);
  };

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Grid menus</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu1}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu1}
            keepMounted
            open={Boolean(anchorElMenu1)}
            onClose={handleCloseMenu1}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-lg p-0">
              <div className="grid-menu grid-menu-2col">
                <Grid container spacing={0}>
                  <Grid item sm={6} className="p-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 w-100 d-block">
                      <span className="font-size-xxl d-block mb-1">
                        <IosFlame fontSize="28px" color="var(--primary)" />
                      </span>
                      <span className="pb-1">Primary</span>
                    </Button>
                  </Grid>
                  <Grid item sm={6} className="p-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 w-100 d-block">
                      <span className="font-size-xxl d-block mb-1">
                        <IosImages fontSize="28px" color="var(--info)" />
                      </span>
                      <span className="pb-1">Info</span>
                    </Button>
                  </Grid>
                  <Grid item sm={6} className="p-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 w-100 d-block">
                      <span className="font-size-xxl d-block mb-1">
                        <IosPeople fontSize="28px" color="var(--success)" />
                      </span>
                      <span className="pb-1">Success</span>
                    </Button>
                  </Grid>
                  <Grid item sm={6} className="p-2">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 w-100 d-block">
                      <span className="font-size-xxl d-block mb-1">
                        <IosApps fontSize="28px" color="var(--danger)" />
                      </span>
                      <span className="pb-1">Danger</span>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Grid menus alternate</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu2}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu2}
            keepMounted
            open={Boolean(anchorElMenu2)}
            onClose={handleCloseMenu2}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-lg overflow-hidden p-0">
              <div className="grid-menu grid-menu-2col">
                <Grid container spacing={0}>
                  <Grid item sm={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 d-block w-100 rounded-0 py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'bell']}
                        className="h2 d-block mb-2 mx-auto mt-1 text-success"
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
                      color="primary"
                      className="border-0 d-block w-100 rounded-0 py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'file-excel']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-success"
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
                      color="primary"
                      className="border-0 d-block w-100 rounded-0 py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'eye']}
                        className="h2 d-block mb-2 mx-auto mt-1 text-success"
                      />
                      <div className="font-weight-bold text-black">
                        Projects
                      </div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Manage servers
                      </div>
                    </Button>
                  </Grid>
                  <Grid item sm={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="border-0 d-block w-100 rounded-0 py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-success"
                      />
                      <div className="font-weight-bold text-black">Tasks</div>
                      <div className="font-size-sm mb-1 text-black-50">
                        Pending items
                      </div>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Bullets menu</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu3}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu3}
            keepMounted
            open={Boolean(anchorElMenu3)}
            onClose={handleCloseMenu3}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="bg-slick-carbon menu-items-container border-0 dropdown-mega-menu-sm">
              <div className="p-2 text-center">
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-love-kiss d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-ripe-malin d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'building']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-grow-early d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-arielle-smile d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-night-fade d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'eye']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
                <Tooltip arrow title="Menu example">
                  <Button
                    color="primary"
                    className="m-3 p-0 border-0 bg-strong-bliss d-inline-flex align-items-center justify-content-center text-center d-60 rounded-circle">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-white"
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Vertical menu</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu4}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu4}
            keepMounted
            open={Boolean(anchorElMenu4)}
            onClose={handleCloseMenu4}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xl">
              <List className="flex-column">
                <ListItem button>
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </ListItem>
                <Divider />
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
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Vertical menu alt</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu5}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu5}
            keepMounted
            open={Boolean(anchorElMenu5)}
            onClose={handleCloseMenu5}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xl">
              <List className="nav-danger nav-pills flex-column p-3">
                <Typography
                  className="text-black pb-2 px-3 font-weight-bold"
                  component="div">
                  Navigation
                </Typography>
                <ListItem button className="rounded-sm">
                  <span>My Account</span>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span>Profile settings</span>
                  <span className="ml-auto badge badge-first">23</span>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <span>Active tasks</span>
                </ListItem>
                <Typography
                  className="text-black py-2 px-3 font-weight-bold"
                  component="div">
                  Heading
                </Typography>
                <ListItem button className="rounded-sm">
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                  <span>Customers</span>
                </ListItem>
                <ListItem button className="rounded-sm">
                  <div className="nav-link-icon opacity-6">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                  <span>Statistics</span>
                </ListItem>
              </List>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Vertical headers menu</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu6}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu6}
            keepMounted
            open={Boolean(anchorElMenu6)}
            onClose={handleCloseMenu6}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xl p-0">
              <div className="bg-composed-wrapper bg-vicious-stance mt-0">
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
                    <Typography
                      className="text-black py-2 px-3"
                      component="div">
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
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">List groups</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu7}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu7}
            keepMounted
            open={Boolean(anchorElMenu7)}
            onClose={handleCloseMenu7}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xl p-0">
              <div className="bg-composed-wrapper bg-dark mt-0">
                <div className="bg-composed-wrapper--image bg-composed-img-1" />
                <div className="bg-composed-wrapper--content text-light px-4 py-3">
                  <h5 className="mb-1">Composed backgrounds</h5>
                  <p className="mb-0 opacity-7">
                    Highly configurable & easy to integrate.
                  </p>
                </div>
              </div>
              <List>
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
                <Divider />
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
                <Divider />
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
                <Divider />
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
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Blocks</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu8}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu8}
            keepMounted
            open={Boolean(anchorElMenu8)}
            onClose={handleCloseMenu8}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl p-0">
              <CardContent className="p-0">
                <Grid container spacing={4} className="mt-4">
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-3 line-height-sm">
                        <b className="font-size-lg">3,568</b>
                        <span className="text-black-50 d-block">sales</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'object-group']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-3 line-height-sm">
                        <b className="font-size-lg">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div className="divider mt-4" />
                <div className="text-center py-4">
                  <Button size="small" color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </span>
                    <span className="btn-wrapper--label">Generate reports</span>
                  </Button>
                </div>
              </CardContent>
              <div className="card-footer bg-light text-center">
                <div className="pt-4 pr-2 pl-2">
                  <Chart
                    options={chart30Options}
                    series={chart30Data}
                    type="line"
                    height={80}
                  />
                </div>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Alternate menu</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu9}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu9}
            keepMounted
            open={Boolean(anchorElMenu9)}
            onClose={handleCloseMenu9}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-lg p-0">
              <List className="text-left bg-transparent d-flex align-items-center flex-column pt-1">
                <Box>
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    variant="dot">
                    <Avatar sizes="44" alt="Dustin Watson" src={avatar4} />
                  </StyledBadge>
                </Box>
                <div className="font-weight-bold text-center pt-2 line-height-1">
                  Dustin Watson
                </div>
                <span className="text-black-50 text-center">
                  Senior React Developer
                </span>
                <Divider className="w-100 mt-2" />
                <ListItem button>My Account</ListItem>
                <ListItem button>Profile settings</ListItem>
                <ListItem button>Active tasks</ListItem>
                <Divider className="w-100" />
                <ListItem className="p-0">
                  <div className="grid-menu grid-menu-2col w-100">
                    <div className="py-3">
                      <div className="d-flex justify-content-center">
                        <div className="d-flex align-items-center">
                          <div>
                            <FontAwesomeIcon
                              icon={['far', 'chart-bar']}
                              className="font-size-xxl text-info"
                            />
                          </div>
                          <div className="pl-3 line-height-sm">
                            <b className="font-size-lg">$9,693</b>
                            <span className="text-black-50 d-block">
                              revenue
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider className="w-100" />
                <ListItem className="rounded-bottom px-3 pt-3 pb-0 text-center">
                  <Tooltip arrow title="Facebook">
                    <Button color="default" className="text-facebook">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip arrow title="Dribbble">
                    <Button color="default" className="text-dribbble mr-2 ml-2">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'dribbble']} />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip arrow title="Twitter">
                    <Button color="default" className="text-twitter">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </span>
                    </Button>
                  </Tooltip>
                </ListItem>
              </List>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Profile block</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu10}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu10}
            keepMounted
            open={Boolean(anchorElMenu10)}
            onClose={handleCloseMenu10}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl p-0">
              <List className="text-left d-block ">
                <ListItem className="pb-0 d-block rounded-top">
                  <div className="align-box-row">
                    <div>
                      <div className="avatar-icon-wrapper avatar-icon-md">
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="pb-1 d-block">
                        John Doe{' '}
                        <small className="text-black-50">
                          (john@example.com)
                        </small>
                      </span>
                      <span className="badge badge-success">
                        Active Account
                      </span>
                    </div>
                  </div>
                  <MuiAlert className="my-2" severity="warning">
                    <b>Unpaid invoice</b> - This account will be disabled
                    starting 12 January 2021
                  </MuiAlert>
                </ListItem>
                <Divider />
                <ListItem className="d-block p-0">
                  <div className="grid-menu grid-menu-2col">
                    <Grid container spacing={0}>
                      <Grid item sm={6}>
                        <div className="py-3 text-center">
                          <div>
                            <FontAwesomeIcon
                              icon={['far', 'chart-bar']}
                              className="font-size-xxl text-info"
                            />
                          </div>
                          <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">$9,693</b>
                            <span className="text-black-50 d-block">
                              revenue
                            </span>
                          </div>
                        </div>
                      </Grid>
                      <Grid item sm={6}>
                        <div className="py-3 text-center">
                          <div>
                            <FontAwesomeIcon
                              icon={['far', 'user']}
                              className="font-size-xxl text-success"
                            />
                          </div>
                          <div className="mt-2 line-height-sm">
                            <b className="font-size-lg">2,345</b>
                            <span className="text-black-50 d-block">users</span>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </ListItem>
                <Divider />
                <ListItem className="rounded-bottom d-block p-3 text-center">
                  <Button variant="outlined" className="text-facebook">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </span>
                  </Button>
                  <Button
                    variant="outlined"
                    className="mr-2 ml-2 text-dribbble">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'dribbble']} />
                    </span>
                  </Button>
                  <Button variant="outlined" className="text-twitter">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                  </Button>
                </ListItem>
              </List>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Timeline block</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu11}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu11}
            keepMounted
            open={Boolean(anchorElMenu11)}
            onClose={handleCloseMenu11}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl overflow-hidden p-0">
              <List className="text-left bg-transparent">
                <ListItem>
                  <div className="align-box-row">
                    <div className="align-self-start">
                      <div className="bg-premium-dark text-center text-white font-size-lg d-40 rounded-circle">
                        <FontAwesomeIcon icon={['far', 'lightbulb']} />
                      </div>
                    </div>
                    <div className="pl-3">
                      <b>Blinded by desire</b>
                      <p className="text-black-50 mt-1 mb-0">
                        A wonderful serenity has taken possession.
                      </p>
                      <div className="timeline-list mt-3">
                        <div className="timeline-item timeline-item-icon">
                          <div className="timeline-item--content">
                            <div className="timeline-item--icon-wrapper bg-danger text-white">
                              <FontAwesomeIcon icon={['far', 'gem']} />
                            </div>
                            <h4 className="timeline-item--label mb-2 font-weight-bold">
                              1998
                            </h4>
                            <p>
                              Bill Clinton's presidential scandal makes it
                              online.
                            </p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-item--content">
                            <div className="timeline-item--icon" />
                            <h4 className="timeline-item--label mb-2 font-weight-bold">
                              Business investor meeting
                              <span className="text-info ml-2 badge badge-neutral-info">
                                New
                              </span>
                            </h4>
                            <p>
                              Mosaic, the first graphical browser, is introduced
                              to the average consumer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListItem>
              </List>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Chat block</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu12}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu12}
            keepMounted
            open={Boolean(anchorElMenu12)}
            onClose={handleCloseMenu12}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl p-0">
              <CardContent className="p-3">
                <div className="chat-wrapper">
                  <div className="chat-item p-2 mb-2">
                    <div className="align-box-row">
                      <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                        <div className="avatar-icon rounded border-0">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <div className="chat-box bg-first text-white">
                          <p>Bye for now, talk to you later.</p>
                        </div>
                        <small className="mt-2 d-block text-black-50">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="mr-1 opacity-5"
                          />
                          11:01 AM | Yesterday
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="chat-item chat-item-reverse p-2 mb-2">
                    <div className="align-box-row flex-row-reverse">
                      <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                        <div className="avatar-icon rounded border-0">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <div className="chat-box bg-first text-white">
                          <p>Almost forgot about your tasks.</p>
                          <p>
                            <b>Check the links below:</b>
                          </p>
                          <Card className="bg-premium-dark p-2 mt-3 mb-2">
                            <div className="text-center py-2">
                              <Tooltip arrow title="Menu Example">
                                <IconButton
                                  color="primary"
                                  className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <FontAwesomeIcon icon={['fas', 'lemon']} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip arrow title="Menu Example">
                                <IconButton
                                  color="primary"
                                  className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <AddCircleTwoToneIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip arrow title="Menu Example">
                                <IconButton
                                  color="primary"
                                  className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                  <FontAwesomeIcon icon={['far', 'gem']} />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </Card>
                        </div>
                        <small className="mt-2 d-block text-black-50">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="mr-1 opacity-5"
                          />
                          11:03 AM | Yesterday
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="card-footer bg-white p-3 text-center d-block">
                <Button variant="contained" color="primary" size="small">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'object-group']} />
                  </span>
                  <span className="btn-wrapper--label">View History</span>
                </Button>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Profile alternate block</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu13}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu13}
            keepMounted
            open={Boolean(anchorElMenu13)}
            onClose={handleCloseMenu13}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl p-0">
              <List className="text-left d-block">
                <ListItem className="pb-0 d-block rounded-top">
                  <div className="align-box-row">
                    <div>
                      <div className="avatar-icon-wrapper avatar-icon-md">
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                    </div>
                    <div className="w-100 pl-2">
                      <span className="pb-1 d-block">John Doe</span>
                      <small className="pb-1 text-black-50 d-block">
                        John's bio description here...
                      </small>
                      <div className="divider my-2" />
                      <small className="text-black-50">
                        Deadline: <b className="text-danger">12 July 2029</b>
                      </small>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="d-block py-2">
                  <div className="align-box-row mb-1">
                    <div>
                      <small className="font-weight-bold">Orders</small>
                    </div>
                    <div className="ml-auto">
                      <div className="font-weight-bold text-success">348</div>
                    </div>
                  </div>
                  <LinearProgress
                    className="progress-sm"
                    color="secondary"
                    value={75}
                  />
                  <div className="align-box-row mt-1 text-muted">
                    <small className="text-dark">0</small>
                    <small className="ml-auto">100%</small>
                  </div>
                </ListItem>
              </List>
              <div className="card-footer bg-white p-3 text-center d-block">
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  className="mr-1">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'cog']} spin />
                  </span>
                  <span className="btn-wrapper--label">Refresh</span>
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className="ml-1">
                  Remove
                </Button>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Bullets alternate</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu14}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu14}
            keepMounted
            open={Boolean(anchorElMenu14)}
            onClose={handleCloseMenu14}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl bg-slick-carbon p-0">
              <div className="px-3 py-3 text-center">
                <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                  <IconButton
                    color="primary"
                    className="p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="font-size-lg"
                    />
                  </IconButton>
                  <div className="d-block text-white-50">Tasks</div>
                </div>
                <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                  <IconButton
                    color="primary"
                    className="p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                    <FontAwesomeIcon
                      icon={['far', 'building']}
                      className="font-size-lg"
                    />
                  </IconButton>
                  <div className="d-block text-white-50">Reports</div>
                </div>
                <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                  <IconButton
                    color="primary"
                    className="p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-lg"
                    />
                  </IconButton>
                  <div className="d-block text-white-50">Stats</div>
                </div>
              </div>
              <div className="divider opacity-2 bg-white" />
              <div className="text-center py-3">
                <Button color="primary" size="small" variant="contained">
                  View more items
                </Button>
              </div>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="heading-3 text-center">Chart box</div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMenu15}>
              Open menu
            </Button>
          </div>
          <Menu
            anchorEl={anchorElMenu15}
            keepMounted
            open={Boolean(anchorElMenu15)}
            onClose={handleCloseMenu15}
            classes={{ list: 'p-0' }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <div className="overflow-hidden dropdown-menu-xxl bg-vicious-stance overflow-hidden p-0">
              <List className="text-left bg-transparent">
                <ListItem className="bg-transparent">
                  <div className="card-body p-2">
                    <div className="align-box-row align-items-start">
                      <div className="font-weight-bold">
                        <small className="text-white-50 d-block mb-1 text-uppercase">
                          New Accounts
                        </small>
                        <span className="font-size-xxl mt-1 text-white">
                          586,356
                        </span>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-white text-center text-success font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                          <FontAwesomeIcon icon={['far', 'lightbulb']} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-success pr-1"
                      />
                      <span className="text-white px-1">15.4%</span>
                      <span className="text-white-50">increase this month</span>
                    </div>
                  </div>
                </ListItem>
              </List>
            </div>
          </Menu>
        </Grid>
      </Grid>
    </Fragment>
  );
}
