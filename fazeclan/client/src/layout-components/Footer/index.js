import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import projectLogo from '../../assets/images/gitclub_logo.png';
import { connect } from 'react-redux';

const Footer = props => {
  const { footerShadow, sidebarToggle, footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        elevation={footerShadow ? 11 : 2}
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed,
          'app-footer--fixed__collapsed': sidebarToggle
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
          <img
                    className="app-logo-img"
                    alt="Git Club"
                    src={projectLogo}
                  />
          </div>
          
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow,
  sidebarToggle: state.ThemeOptions.sidebarToggle
});
export default connect(mapStateToProps)(Footer);
