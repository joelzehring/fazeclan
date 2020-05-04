import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IconButton, Box } from '@material-ui/core';

import { connect } from 'react-redux';

import projectLogo from '../../assets/images/gitclub_logo_round.svg';

const HeaderLogo = props => {
  const { sidebarToggle, sidebarHover } = props;
  return (
    <Fragment>
      <div
        className={clsx('app-header-logo', {
          'app-header-logo-close': sidebarToggle,
          'app-header-logo-open': sidebarHover
        })}>
        <Box
          className="header-logo-wrapper"
          title="Git Club">
          <Link to="/Dashboard" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-header-logo-img"
                alt="Git Club"
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="header-logo-text">Git Club</Box>
        </Box>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarHover: state.ThemeOptions.sidebarHover
});

export default connect(mapStateToProps)(HeaderLogo);
