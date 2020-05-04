import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Hidden,
  IconButton,
  Paper,
  Box,
  Typography,
  Dialog,
  Checkbox,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
  FormControl
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';

import { connect } from 'react-redux';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';

import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import hero1 from '../../assets/images/hero-bg/hero-1.jpg';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' }
];

function PageTitle(props) {
  const {
    pageTitleStyle,
    pageTitleBackground,
    pageTitleShadow,
    pageTitleBreadcrumb,
    pageTitleIconBox,
    pageTitleDescription
  } = props;

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Paper
        square
        elevation={pageTitleShadow ? 6 : 2}
        className={clsx('app-page-title', pageTitleStyle, pageTitleBackground)}>
        <div>
          {pageTitleBreadcrumb && (
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              className="mb-4"
              maxItems={2}
              aria-label="breadcrumb">
              <Link color="inherit" to="#" onClick={e => e.preventDefault()}>
                Home
              </Link>
              <Link color="inherit" to="#" onClick={e => e.preventDefault()}>
                Dashboards
              </Link>
              <Link color="inherit" to="#" onClick={e => e.preventDefault()}>
                Examples
              </Link>
              <Link color="inherit" to="#" onClick={e => e.preventDefault()}>
                Pages
              </Link>
              <Typography color="textPrimary">{props.titleHeading}</Typography>
            </Breadcrumbs>
          )}

          
        </div>

       
      </Paper>
    </Fragment>
  );
}
const mapStateToProps = state => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleBreadcrumb: state.ThemeOptions.pageTitleBreadcrumb,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
