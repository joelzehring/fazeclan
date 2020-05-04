import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  IconButton,
  Box,
  Typography,
  Checkbox,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Tooltip,
  TextField,
  FormControl
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

import { NavLink as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '6px',
    '& > div': {
      maxWidth: 40,
      height: '4px',
      borderRadius: '25px',
      width: '100%',
      backgroundColor: '#000'
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary[900],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

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

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={5}
                      className="d-flex align-items-center">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-plum-plate min-vh-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero9 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                          <div className="bg-composed-wrapper--content p-5">
                            <div className="d-flex align-items-center">
                              <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                                Register page
                              </span>
                              <Tooltip
                                arrow
                                title="Create your own register or login pages using the included elements."
                                placement="right">
                                <span className="text-white-50 pl-3">
                                  <FontAwesomeIcon
                                    icon={['far', 'question-circle']}
                                  />
                                </span>
                              </Tooltip>
                            </div>
                            <div className="text-white mt-3">
                              <h1 className="display-4 my-3 font-weight-bold">
                                Why should you create an account?
                              </h1>
                              <p className="font-size-md mb-0 text-white-50">
                                A free hour, when our power of choice is
                                untrammelled and when nothing prevents.
                              </p>
                              <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                                <Button
                                  size="large"
                                  className="text-white"
                                  variant="contained"
                                  color="primary"
                                  component={RouterLink}
                                  to="/DashboardDefault">
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fas', 'arrow-left']}
                                    />
                                  </span>
                                  <span className="btn-wrapper--label">
                                    Back to dashboard
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <Tooltip arrow title="Facebook">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'facebook']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Twitter">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'twitter']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Google">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'google']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Instagram">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'instagram']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      lg={7}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <div className="pt-5 pb-4">
                          <StyledTabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}>
                            <StyledTab label="Create an account" />
                            <StyledTab label="Sign in" />
                          </StyledTabs>
                        </div>
                        <TabPanel value={value} index={0}>
                          <h3 className="display-4 mb-2 font-weight-bold">
                            Create account
                          </h3>
                          <p className="font-size-lg mb-5 text-black-50">
                            Fill in the fields below and you'll be good to go.
                          </p>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Email address"
                              fullWidth
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Password"
                              fullWidth
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="First name"
                              fullWidth
                              placeholder="Enter your firstname"
                              type="text"
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Last name"
                              fullWidth
                              placeholder="Enter your lastname"
                              type="text"
                            />
                          </div>
                          <div className="form-group pt-2 mb-4">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>

                          <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            className="mb-5">
                            Create Account
                          </Button>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <h3 className="display-4 mb-2 font-weight-bold">
                            Existing account
                          </h3>
                          <p className="font-size-lg mb-5 text-black-50">
                            You already have an account? Fill in the fields
                            below to login into your existing dashboard.
                          </p>
                          <Card className="mx-0 bg-secondary mt-0 w-100 p-0 mb-4 border-0">
                            <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0">
                              <div className="text-muted text-center mb-3">
                                <span>Sign in with</span>
                              </div>
                              <div className="text-center">
                                <Button
                                  variant="outlined"
                                  className="mr-2 text-facebook">
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fab', 'facebook']}
                                    />
                                  </span>
                                  <span className="btn-wrapper--label">
                                    Facebook
                                  </span>
                                </Button>
                                <Button
                                  variant="outlined"
                                  className="ml-2 text-twitter">
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fab', 'twitter']}
                                    />
                                  </span>
                                  <span className="btn-wrapper--label">
                                    Twitter
                                  </span>
                                </Button>
                              </div>
                            </div>
                            <CardContent className="p-3">
                              <div className="text-center text-black-50 mb-3">
                                <span>Or sign in with credentials</span>
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
                      </Container>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
