import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Avatar,
  IconButton,
  Box,
  Typography,
  Dialog,
  Checkbox,
  Tabs,
  Tab,
  LinearProgress,
  Badge,
  Card,
  CardContent,
  Button,
  Tooltip,
  FormControl
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const LivePreviewExample = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal5(!modal5);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };
  return (
    <Fragment>
      <Button
        onClick={toggle1}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example I
      </Button>
      <Dialog scroll="body" maxWidth="lg" open={modal1} onClose={toggle1}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <div className="hero-wrapper bg-composed-wrapper bg-plum-plate h-100">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image "
                  style={{ backgroundImage: 'url(' + hero1 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5" />
                <div className="bg-composed-wrapper--content p-5">
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                      New release
                    </span>
                    <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!">
                      <span className="text-white-50 pl-3">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="text-white mt-3">
                    <h1 className="display-4 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-md mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button color="primary" variant="contained">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <div className="d-flex justify-content-center">
                  <Tooltip arrow title="Facebook">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Twitter">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Google">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Instagram">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="bg-white ">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}>
                <Tab className="py-3" label="Timeline" />
                <Tab className="py-3" label="Tasks" />
                <Tab className="py-3" label="Reports" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        31
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-warning" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Implemented
                        <br />
                        bugfixes
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        68
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Unresolved
                        <br />
                        tickets
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card className="card-box text-black-50 bg-secondary mb-4 p-3">
                      <div className="display-3 text-black font-weight-bold">
                        57
                      </div>
                      <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Support
                        <br />
                        requests
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <Card className="card-box bg-secondary mb-4">
                  <CardContent className="p-3">
                    <div className="text-left">
                      <div className="mt-1">
                        <FontAwesomeIcon
                          icon={['fas', 'lemon']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-3 line-height-sm">
                        <b className="font-size-lg text-black">3,568</b>
                        <span className="text-black-50 pl-1">clicks</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <LinearProgress color="primary" value={85} />
                      <div className="align-box-row progress-bar--label mt-2 text-muted">
                        <div>Target</div>
                        <div className="ml-auto">100%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-center">
                  <Button variant="outlined" color="primary">
                    Create new report
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Card className="m-0 bg-secondary border-0">
                  <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="text-center">
                      <Button variant="outlined" className="mr-2 text-facebook">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </span>
                        <span className="btn-wrapper--label">Facebook</span>
                      </Button>
                      <Button variant="outlined" className="ml-2 text-twitter">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </span>
                        <span className="btn-wrapper--label">Twitter</span>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-center text-black-50 mb-3">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form className="px-5">
                      <div className="mb-3">
                        <FormControl className="w-100">
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Email address
                          </InputLabel>
                          <Input
                            fullWidth
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <MailOutlineTwoToneIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>
                      <div className="mb-3">
                        <FormControl className="w-100">
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            id="standard-adornment-password"
                            fullWidth
                            type="password"
                            startAdornment={
                              <InputAdornment position="start">
                                <LockTwoToneIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>
                      <div className="w-100">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked1}
                              onChange={handleChange1}
                              value="checked1"
                              color="primary"
                            />
                          }
                          label="Remember me"
                        />
                      </div>
                      <div className="text-center">
                        <Button
                          color="primary"
                          variant="contained"
                          size="large"
                          className="my-2">
                          Sign in
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Card className="card-box bg-secondary mb-4">
                      <div className="card-indicator bg-first" />
                      <CardContent className="px-4 py-3">
                        <div className="pb-3 d-flex justify-content-between">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Presentation site design
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="badge badge-primary px-3">
                            On Hold
                          </div>
                          <div className="font-size-sm text-danger px-2">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1"
                            />
                            14:22
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card className="card-box bg-secondary mb-4">
                      <div className="card-indicator bg-success" />
                      <CardContent className="px-4 py-3">
                        <div className="pb-3 d-flex justify-content-between">
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Create UI mockups
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="px-3 badge badge-success">Fixed</div>
                          <div className="font-size-sm text-dark px-2">
                            <FontAwesomeIcon
                              icon={['far', 'clock']}
                              className="mr-1"
                            />
                            09:41
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <div className="timeline-list">
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
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
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-2">
                        <Button
                          size="small"
                          variant="contained"
                          color="primary">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </Dialog>

      <Button
        onClick={toggle2}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example II
      </Button>
      <Dialog scroll="body" maxWidth="lg" open={modal2} onClose={toggle2}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <div className="hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded-left">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded-left"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-left" />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className="px-4">
                  <span className="btn-wrapper--label">Continue reading</span>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="card-tr-actions">
              <Tooltip arrow title="Send Message">
                <Button size="small" variant="outlined" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="text-center pt-4">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar7} />
                  </div>
                </div>
              </div>
              <div>
                <span className="my-2 text-success font-size-md px-4 py-1 h-auto badge badge-neutral-success">
                  Online
                </span>
              </div>
              <h3 className="font-weight-bold mt-3">Lacie-Mae Mckay</h3>
              <p className="mb-0 text-black-50">
                Senior Frontend Developer at <b>Google Inc.</b>
              </p>
              <div className="pt-3">
                <Tooltip arrow title="Github">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-github">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Instagram">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-instagram">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Google">
                  <IconButton
                    variant="outlined"
                    className="d-50 m-2 text-google">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="d-flex p-4 bg-secondary card-footer mt-4 flex-wrap">
                <div className="w-50 p-2">
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
                <div className="w-50 p-2">
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
                <div className="w-50 p-2">
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
                <div className="w-50 p-2">
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
            </div>
          </Grid>
        </Grid>
      </Dialog>

      <Button
        onClick={toggle3}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example III
      </Button>
      <Dialog scroll="body" maxWidth="lg" open={modal3} onClose={toggle3}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <div className="p-4 text-center">
              <div className="avatar-icon-wrapper rounded-circle mx-auto">
                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                  <div className="rounded-circle border-3 border-white overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h4 className="font-size-lg font-weight-bold my-2">
                Marion Devine
              </h4>
              <div className="text-center my-4">
                <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                  Web developer
                </span>
                <span className="text-warning mx-1 badge badge-neutral-warning badge-pill">
                  Javascript
                </span>
                <span className="text-danger mx-1 badge badge-neutral-danger badge-pill">
                  Angular
                </span>
              </div>

              <p className="text-muted mb-4">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <div className="divider my-4" />
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Current month</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      46,362
                    </span>
                    <Badge color="secondary" className="ml-2 text-danger">
                      -8%
                    </Badge>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Last year</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      34,546
                    </span>
                    <Badge color="secondary" className="text-success ml-2">
                      +13%
                    </Badge>
                  </div>
                </Grid>
              </Grid>
              <div className="divider my-4" />
              <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                Team members
              </div>
              <AvatarGroup className="d-flex justify-content-center">
                <Avatar alt="..." src={avatar1} />
                <Avatar alt="..." src={avatar2} />
                <Avatar alt="..." src={avatar3} />
                <Avatar alt="..." src={avatar4} />
                <Tooltip title="Shanelle Wynn • Beck Simpson">
                  <Avatar>+2</Avatar>
                </Tooltip>
              </AvatarGroup>
              <div className="divider my-4" />
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className="mt-2">
                View complete profile
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + people3 + ')' }}
                />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white mt-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button color="primary" variant="contained" size="large">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>

      <Button
        onClick={toggle4}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example IV
      </Button>
      <Dialog scroll="body" maxWidth="md" open={modal4} onClose={toggle4}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <img alt="..." className=" img-fit-container" src={stock1} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="bg-white ">
              <div className="p-5">
                <img
                  alt="..."
                  className="w-25 d-block img-fluid"
                  src={svgImage1}
                />
                <h1 className="display-4 my-3 font-weight-bold">
                  Wonderful serenity has possession
                </h1>
                <p className="font-size-lg text-black">
                  A free hour, when our power of choice is untrammelled and when
                  nothing prevents.
                </p>
                <p className="font-size-sm mb-3 text-black-50">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics
                </p>
                <Button color="primary" variant="contained">
                  Continue reading
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>

      <Button
        onClick={toggle5}
        variant="outlined"
        color="primary"
        className="m-2">
        Open example V
      </Button>
      <Dialog scroll="body" maxWidth="md" open={modal5} onClose={toggle5}>
        <div className="p-4">
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="card-img-wrapper rounded">
                <div className="img-wrapper-overlay">
                  <div className="overlay-btn-wrapper">
                    <Button color="primary" className="p-0 d-50 rounded-circle">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'play-circle']} />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="card-badges card-badgestop">
                  <Badge color="secondary">New</Badge>
                </div>
                <img alt="..." className="card-img-top rounded" src={people2} />
              </a>
            </Grid>
            <Grid item lg={8}>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="font-size-xxl d-block my-4">
                New report file has been uploaded
              </a>
              <p className="text-black-50 font-size-lg mb-0">
                Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
                nonummy nibh euismod tinciduntut laoreet doloremagna aliquam
                erat volutpat.
              </p>

              <div className="d-flex align-items-center mt-4">
                <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar3} />
                  </div>
                </div>
                <div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-weight-bold text-black"
                    title="...">
                    Aaran Mitchell
                  </a>
                  <span className="text-black-50 d-block">
                    UI Engineer, Google
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default LivePreviewExample;
