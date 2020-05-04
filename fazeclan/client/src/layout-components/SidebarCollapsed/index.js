import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Hidden,
  Drawer,
  IconButton,
  AppBar,
  Paper,
  Box,
  Button,
  Tooltip
} from '@material-ui/core';

import { connect } from 'react-redux';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import SidebarHeader from '../SidebarHeader';
import SidebarUserbox from '../SidebarUserbox';
import SidebarMenu from '../SidebarMenu';

import navItems from '../Sidebar/navItems';

import { NavLink as RouterLink } from 'react-router-dom';

import projectLogo from '../../assets/images/react.svg';
import {
  Settings,
  CloudDrizzle,
  Search,
  Users,
  LifeBuoy,
  Coffee,
  Briefcase,
  Bell
} from 'react-feather';

const SidebarCollapsed = props => {
  const closeDrawer = () => setSidebarToggleMobile(!sidebarToggleMobile);

  const sidebarMenuContent = (
    <div>
      {navItems.map(list => (
        <SidebarMenu
          component="div"
          key={list.label}
          pages={list.content}
          title={list.label}
        />
      ))}
    </div>
  );

  const { setSidebarToggleMobile, sidebarToggleMobile } = props;

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          className="app-sidebar-wrapper-lg">
          <SidebarHeader />
          <PerfectScrollbar>
            <SidebarUserbox />
            {sidebarMenuContent}
          </PerfectScrollbar>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper elevation={7} square className="app-sidebar-collapsed-wrapper">
          <AppBar color="secondary" position="relative" elevation={0}>
            <div className="sidebar-collapsed-logo">
              <Box
                className="header-logo-wrapper"
                title="Carolina React Admin Dashboard with Material-UI PRO">
                <Link
                  to="/DashboardDefault"
                  className="header-logo-wrapper-link">
                  <IconButton
                    color="primary"
                    size="medium"
                    className="header-logo-wrapper-btn">
                    <img
                      className="app-sidebar-logo"
                      alt="Carolina React Admin Dashboard with Material-UI PRO"
                      src={projectLogo}
                    />
                  </IconButton>
                </Link>
              </Box>
            </div>
          </AppBar>
          <div className="app-sidebar--content">
            <PerfectScrollbar>
              <ul className="sidebar-menu-collapsed">
                <li>
                  <Tooltip arrow placement="right" title="Dashboard">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/DashboardDefault">
                      <span>
                        <Settings className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Events calendar">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsCalendar">
                      <span>
                        <CloudDrizzle className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Chat">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsChat">
                      <span>
                        <Search className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Contacts">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsContacts">
                      <span>
                        <Briefcase className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="File manager">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsFileManager">
                      <span>
                        <Users className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Mail">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsMail">
                      <span>
                        <LifeBuoy className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="Projects">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsProjects">
                      <span>
                        <Coffee className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip arrow placement="right" title="App widgets">
                    <Button
                      className="app-sidebar-btn-wrapper"
                      activeClassName="active"
                      component={RouterLink}
                      to="/ApplicationsWidgets">
                      <span>
                        <Bell className="app-sidebar-btn-icon" />
                      </span>
                    </Button>
                  </Tooltip>
                </li>
              </ul>
              <div className="text-center mb-2">
                <Tooltip arrow placement="right" title="Back to dashboard">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="text-white text-center font-size-lg d-40"
                    component={RouterLink}
                    to="/DashboardDefault">
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                  </Button>
                </Tooltip>
              </div>
            </PerfectScrollbar>
          </div>
        </Paper>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarShadow: state.ThemeOptions.sidebarShadow,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollapsed);
