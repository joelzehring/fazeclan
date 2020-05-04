import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Header, SidebarCollapsed } from '../../layout-components';

const CollapsedSidebar = props => {
  const { children, contentBackground } = props;

  return (
    <Fragment>
      <div className={clsx('app-wrapper vh-100', contentBackground)}>
        <Header isCollapsedLayout={true} />
        <div className="app-main">
          <SidebarCollapsed />
          <div className={clsx('app-content')}>
            <div className="app-inner-content-layout--main">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CollapsedSidebar.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  contentBackground: state.ThemeOptions.contentBackground,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle,
  headerSearchHover: state.ThemeOptions.headerSearchHover
});

export default connect(mapStateToProps)(CollapsedSidebar);
