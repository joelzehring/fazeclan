import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IconButton, Box, Tooltip } from '@material-ui/core';

import { connect } from 'react-redux';

import projectLogo from '../../images/gitclub_logo_round.svg';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const SidebarHeader = props => {
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    sidebarToggleMobile,
    setSidebarToggleMobile,
    setSidebarToggle,
    sidebarToggle,
    sidebarHover
  } = props;

  return (
    <Fragment>
      <div
        className={clsx('app-sidebar-header', {
          'app-sidebar-header-close': sidebarToggle && !sidebarHover
        })}>
        <Box
          className="header-logo-wrapper"
          title="Git Club">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-sidebar-logo"
                alt="Git Club"
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="header-logo-text">Git Club</Box>
        </Box>
        <Box
          className={clsx('app-sidebar-header-btn', {
            'app-sidebar-header-btn-close': sidebarToggle && !sidebarHover
          })}>
          <Tooltip title="Toggle Sidebar" placement="right">
            <IconButton color="inherit" onClick={toggleSidebar} size="medium">
              {sidebarToggle ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
            </IconButton>
          </Tooltip>
        </Box>
        <Box className="app-sidebar-header-btn-mobile">
          <Tooltip title="Toggle Sidebar" placement="right">
            <IconButton
              color="inherit"
              onClick={toggleSidebarMobile}
              size="medium">
              {sidebarToggleMobile ? (
                <MenuOpenRoundedIcon />
              ) : (
                <MenuRoundedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarHover: state.ThemeOptions.sidebarHover,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
