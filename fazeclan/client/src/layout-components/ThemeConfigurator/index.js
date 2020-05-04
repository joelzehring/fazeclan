import React from 'react';
import { connect } from 'react-redux';
import { Switch } from '@material-ui/core';

import clsx from 'clsx';

import { Tooltip, Box, Hidden, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import Drawer from '@material-ui/core/Drawer';

import {
  setHeaderFixed,
  setHeaderShadow,
  setSidebarFixed,
  setSidebarShadow,
  setSidebarUserbox,
  setSidebarFooter,
  setPageTitleIconBox,
  setPageTitleBreadcrumb,
  setPageTitleShadow,
  setPageTitleStyle,
  setPageTitleBackground,
  setPageTitleDescription,
  setContentBackground,
  setFooterFixed,
  setFooterShadow
} from '../../reducers/ThemeOptions';

import PerfectScrollbar from 'react-perfect-scrollbar';

const ThemeConfigurator = props => {
  const [state, setState] = React.useState({
    right: false
  });

  const {
    headerFixed,
    setHeaderFixed,
    headerShadow,
    setHeaderShadow,
    sidebarFixed,
    setSidebarFixed,
    sidebarUserbox,
    setSidebarUserbox,
    sidebarFooter,
    setSidebarFooter,
    sidebarShadow,
    setSidebarShadow,
    contentBackground,
    setContentBackground,

    pageTitleStyle,
    setPageTitleStyle,
    pageTitleBackground,
    setPageTitleBackground,
    pageTitleShadow,
    setPageTitleShadow,
    pageTitleBreadcrumb,
    setPageTitleBreadcrumb,
    pageTitleIconBox,
    setPageTitleIconBox,
    pageTitleDescription,
    setPageTitleDescription,

    footerFixed,
    setFooterFixed,
    footerShadow,
    setFooterShadow
  } = props;

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  // Header

  const toggleHeaderFixed = () => {
    setHeaderFixed(!headerFixed);
  };
  const toggleHeaderShadow = () => {
    setHeaderShadow(!headerShadow);
  };

  // Sidebar

  const toggleSidebarFixed = () => {
    setSidebarFixed(!sidebarFixed);
  };
  const toggleSidebarShadow = () => {
    setSidebarShadow(!sidebarShadow);
  };

  const toggleSidebarUserbox = () => {
    setSidebarUserbox(!sidebarUserbox);
  };
  const toggleSidebarFooter = () => {
    setSidebarFooter(!sidebarFooter);
  };

  // Footer

  const toggleFooterFixed = () => {
    setFooterFixed(!footerFixed);
  };
  const toggleFooterShadow = () => {
    setFooterShadow(!footerShadow);
  };

  // Page title

  const togglePageTitleIconBox = () => {
    setPageTitleIconBox(!pageTitleIconBox);
  };
  const togglePageTitleBreadcrumb = () => {
    setPageTitleBreadcrumb(!pageTitleBreadcrumb);
  };
  const togglePageTitleShadow = () => {
    setPageTitleShadow(!pageTitleShadow);
  };
  const togglePageTitleDescription = () => {
    setPageTitleDescription(!pageTitleDescription);
  };

  return (
    <Hidden mdDown>
      <Box className="theme-config-wrapper" component="div">
        <Fab
          size="large"
          color="primary"
          onClick={toggleDrawer('right', true)}
          className="configurator-btn">
          <SettingsTwoToneIcon />
        </Fab>
        <Drawer
          ModalProps={{
            BackdropProps: {
              classes: {
                root: 'drawer-backdrop'
              }
            }
          }}
          variant="temporary"
          anchor="right"
          open={state.right}
          className="drawer-wrapper-right"
          onClose={toggleDrawer('right', false)}>
          <Box p={0} className="theme-config-content">
            <PerfectScrollbar>
              <Tooltip title="Close theme configurator" placement="left">
                <Fab
                  color="secondary"
                  className="drawer-close-btn"
                  onClick={toggleDrawer('right', false)}>
                  <CloseTwoToneIcon />
                </Fab>
              </Tooltip>
              <h4 className="theme-configurator--heading">Header</h4>
              <ul className="theme-configurator--list">
                <li>
                  <div>
                    <Switch
                      className="switch-small toggle-switch-line toggle-switch-success"
                      onChange={toggleHeaderFixed}
                      checked={props.headerFixed}
                    />
                  </div>
                  <div className="theme-configurator--list__heading">
                    Fixed Header
                  </div>
                </li>
                <li>
                  <div>
                    <Switch
                      className="switch-small toggle-switch-line toggle-switch-success"
                      onChange={toggleHeaderShadow}
                      checked={props.headerShadow}
                    />
                  </div>
                  <div className="theme-configurator--list__heading">
                    Header Shadow
                  </div>
                </li>
              </ul>

              <h4 className="theme-configurator--heading">Sidebar</h4>
              <ul className="theme-configurator--list">
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleSidebarFixed}
                    checked={props.sidebarFixed}
                  />
                  <div className="theme-configurator--list__heading">
                    Fixed sidebar
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleSidebarShadow}
                    checked={props.sidebarShadow}
                  />
                  <div className="theme-configurator--list__heading">
                    Sidebar shadow
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleSidebarFooter}
                    checked={props.sidebarFooter}
                  />
                  <div className="theme-configurator--list__heading">
                    Sidebar footer
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleSidebarUserbox}
                    checked={props.sidebarUserbox}
                  />
                  <div className="theme-configurator--list__heading">
                    Sidebar userbox
                  </div>
                </li>
              </ul>
              <h4 className="theme-configurator--heading">Main content</h4>

              <ul className="theme-configurator--list">
                <li className="d-block py-3 px-2">
                  <div>
                    <div className="rounded-sm pt-2 text-center">
                      <h5 className="font-size-lg font-weight-bold mb-2">
                        Color schemes
                      </h5>
                      <div className="theme-configurator--swatches">
                        <div
                          onClick={() => {
                            setContentBackground('');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                            {
                              active: contentBackground === 'bg-neutral-primary'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-gray-100');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-100',
                            { active: contentBackground === 'bg-gray-100' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-gray-200');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-200',
                            { active: contentBackground === 'bg-gray-200' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-gray-300');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-300',
                            { active: contentBackground === 'bg-gray-300' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-gray-400');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-400',
                            { active: contentBackground === 'bg-gray-400' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-gray-500');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-500',
                            { active: contentBackground === 'bg-gray-500' }
                          )}
                        />
                        <div className="divider my-2" />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-primary');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                            {
                              active: contentBackground === 'bg-neutral-primary'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-secondary');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-secondary',
                            {
                              active:
                                contentBackground === 'bg-neutral-secondary'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-success');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-success',
                            {
                              active: contentBackground === 'bg-neutral-success'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-info');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-info',
                            { active: contentBackground === 'bg-neutral-info' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-warning');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-warning',
                            {
                              active: contentBackground === 'bg-neutral-warning'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-danger');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-danger',
                            {
                              active: contentBackground === 'bg-neutral-danger'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setContentBackground('bg-neutral-dark');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-dark',
                            { active: contentBackground === 'bg-neutral-dark' }
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h4 className="theme-configurator--heading">Page title</h4>
              <ul className="theme-configurator--list">
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={togglePageTitleIconBox}
                    checked={props.pageTitleIconBox}
                  />
                  <div className="theme-configurator--list__heading">
                    Enable title icon box
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={togglePageTitleBreadcrumb}
                    checked={props.pageTitleBreadcrumb}
                  />
                  <div className="theme-configurator--list__heading">
                    Enable breadcrumb section
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={togglePageTitleShadow}
                    checked={props.pageTitleShadow}
                  />
                  <div className="theme-configurator--list__heading">
                    Page title shadow
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={togglePageTitleDescription}
                    checked={props.pageTitleDescription}
                  />
                  <div className="theme-configurator--list__heading">
                    Enable heading description
                  </div>
                </li>
                <li className="d-block p-3">
                  <div>
                    <div className="rounded-sm bg-light p-3 text-center">
                      <h5 className="font-size-lg font-weight-bold mb-3">
                        Page title styles
                      </h5>
                      <div>
                        <Button
                          onClick={() => {
                            setPageTitleStyle('');
                            setPageTitleShadow(false);
                          }}
                          size="small"
                          variant="outlined"
                          color="primary"
                          className={clsx('m-1', {
                            active: pageTitleStyle === ''
                          })}>
                          Style 1
                        </Button>
                        <Button
                          onClick={() => {
                            setPageTitleStyle('app-page-title-alt-1');
                            setPageTitleShadow(true);
                          }}
                          size="small"
                          variant="outlined"
                          color="primary"
                          className={clsx('m-1', {
                            active: pageTitleStyle === 'app-page-title-alt-1'
                          })}>
                          Style 2
                        </Button>
                        <Button
                          onClick={() => {
                            setPageTitleStyle('app-page-title-alt-2');
                            setPageTitleShadow(true);
                          }}
                          size="small"
                          variant="outlined"
                          color="primary"
                          className={clsx('m-1', {
                            active: pageTitleStyle === 'app-page-title-alt-2'
                          })}>
                          Style 3
                        </Button>
                        <Button
                          onClick={() => {
                            setPageTitleStyle('app-page-title-alt-3');
                            setPageTitleShadow(true);
                          }}
                          size="small"
                          variant="outlined"
                          color="primary"
                          className={clsx('m-1', {
                            active: pageTitleStyle === 'app-page-title-alt-3'
                          })}>
                          Style 4
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block py-3 px-2">
                  <div>
                    <div className="rounded-sm pt-2 text-center">
                      <h5 className="font-size-lg font-weight-bold mb-2">
                        Color schemes
                      </h5>
                      <div className="theme-configurator--swatches">
                        <div
                          onClick={() => {
                            setPageTitleBackground('');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg',
                            { active: pageTitleBackground === '' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-gray-100');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-100',
                            { active: pageTitleBackground === 'bg-gray-100' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-gray-200');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-200',
                            { active: pageTitleBackground === 'bg-gray-200' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-gray-300');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-300',
                            { active: pageTitleBackground === 'bg-gray-300' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-gray-400');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-400',
                            { active: pageTitleBackground === 'bg-gray-400' }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-gray-500');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-gray-500',
                            { active: pageTitleBackground === 'bg-gray-500' }
                          )}
                        />
                        <div className="divider my-2" />
                        <div
                          onClick={() => {
                            setPageTitleBackground(
                              'bg-deep-sky app-page-title--dark'
                            );
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-deep-sky app-page-title--dark',
                            {
                              active:
                                pageTitleBackground ===
                                'bg-deep-sky app-page-title--dark'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground(
                              'bg-royal app-page-title--dark'
                            );
                          }}
                          className={clsx(
                            "theme-config-swatch theme-config-swatch--lg bg-royal app-page-title--dark')",
                            {
                              active:
                                pageTitleBackground ===
                                'bg-royal app-page-title--dark'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground(
                              'bg-sunrise-purple app-page-title--dark'
                            );
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-sunrise-purple app-page-title--dark',
                            {
                              active:
                                pageTitleBackground ===
                                'bg-sunrise-purple app-page-title--dark'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground(
                              'bg-vicious-stance app-page-title--dark'
                            );
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-vicious-stance app-page-title--dark',
                            {
                              active:
                                pageTitleBackground ===
                                'bg-vicious-stance app-page-title--dark'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground(
                              'bg-slick-carbon app-page-title--dark'
                            );
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-slick-carbon app-page-title--dark',
                            {
                              active:
                                pageTitleBackground ===
                                'bg-slick-carbon app-page-title--dark'
                            }
                          )}
                        />
                        <div className="divider my-2" />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-primary');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-primary',
                            {
                              active:
                                pageTitleBackground === 'bg-neutral-primary'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-secondary');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-secondary',
                            {
                              active:
                                pageTitleBackground === 'bg-neutral-secondary'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-success');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-success',
                            {
                              active:
                                pageTitleBackground === 'bg-neutral-success'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-info');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-info',
                            {
                              active: pageTitleBackground === 'bg-neutral-info'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-warning');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-warning',
                            {
                              active:
                                pageTitleBackground === 'bg-neutral-warning'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-danger');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-danger',
                            {
                              active:
                                pageTitleBackground === 'bg-neutral-danger'
                            }
                          )}
                        />
                        <div
                          onClick={() => {
                            setPageTitleBackground('bg-neutral-dark');
                          }}
                          className={clsx(
                            'theme-config-swatch theme-config-swatch--lg bg-neutral-dark',
                            {
                              active: pageTitleBackground === 'bg-neutral-dark'
                            }
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h4 className="theme-configurator--heading">Footer</h4>
              <ul className="theme-configurator--list">
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleFooterFixed}
                    checked={props.footerFixed}
                  />
                  <div className="theme-configurator--list__heading">
                    Fixed footer
                  </div>
                </li>
                <li>
                  <Switch
                    className="switch-small toggle-switch-line toggle-switch-success"
                    onChange={toggleFooterShadow}
                    checked={props.footerShadow}
                  />
                  <div className="theme-configurator--list__heading">
                    Footer shadow
                  </div>
                </li>
              </ul>
            </PerfectScrollbar>
          </Box>
        </Drawer>
      </Box>
    </Hidden>
  );
};

const mapStateToProps = state => ({
  headerFixed: state.ThemeOptions.headerFixed,
  headerShadow: state.ThemeOptions.headerShadow,

  sidebarFixed: state.ThemeOptions.sidebarFixed,
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,
  sidebarFooter: state.ThemeOptions.sidebarFooter,
  sidebarShadow: state.ThemeOptions.sidebarShadow,

  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleBreadcrumb: state.ThemeOptions.pageTitleBreadcrumb,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription,

  contentBackground: state.ThemeOptions.contentBackground,

  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow
});

const mapDispatchToProps = dispatch => ({
  setHeaderFixed: enable => dispatch(setHeaderFixed(enable)),
  setHeaderShadow: enable => dispatch(setHeaderShadow(enable)),

  setSidebarFixed: enable => dispatch(setSidebarFixed(enable)),
  setSidebarUserbox: enable => dispatch(setSidebarUserbox(enable)),
  setSidebarFooter: enable => dispatch(setSidebarFooter(enable)),
  setSidebarShadow: enable => dispatch(setSidebarShadow(enable)),

  setPageTitleStyle: color => dispatch(setPageTitleStyle(color)),
  setPageTitleBackground: color => dispatch(setPageTitleBackground(color)),
  setPageTitleShadow: enable => dispatch(setPageTitleShadow(enable)),
  setPageTitleBreadcrumb: enable => dispatch(setPageTitleBreadcrumb(enable)),
  setPageTitleIconBox: enable => dispatch(setPageTitleIconBox(enable)),
  setPageTitleDescription: enable => dispatch(setPageTitleDescription(enable)),

  setContentBackground: color => dispatch(setContentBackground(color)),

  setFooterFixed: enable => dispatch(setFooterFixed(enable)),
  setFooterShadow: enable => dispatch(setFooterShadow(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeConfigurator);
