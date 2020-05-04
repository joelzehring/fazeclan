import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  InputAdornment,
  IconButton,
  Button,
  Tooltip,
  TextField
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import svgImage3 from '../../../assets/images/illustrations/404.svg';

import { NavLink as RouterLink } from 'react-router-dom';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <Button
            component={RouterLink}
            to="/DashboardDefault"
            size="large"
            color="secondary"
            variant="contained"
            className="text-white btn-go-back">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </span>
            <span className="btn-wrapper--label">Back to dashboard</span>
          </Button>
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <Grid
                        item
                        lg={6}
                        md={9}
                        className="px-4 px-lg-0 mx-auto text-center text-black">
                        <img
                          src={svgImage3}
                          className="w-50 mx-auto d-block my-5 img-fluid"
                          alt="..."
                        />

                        <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                          The page you were looking for doesn't exist.
                        </h3>
                        <p className="mb-4">
                          You may have mistyped the address or the page may have
                          moved. Try searching below.
                        </p>
                        <TextField
                          className="mt-0"
                          margin="dense"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <Button
                          disableElevation
                          variant="contained"
                          className="ml-3"
                          size="large"
                          color="primary">
                          <span className="btn-wrapper--label">Search</span>
                        </Button>
                      </Grid>
                    </div>
                    <div className="hero-footer py-4">
                      <Tooltip arrow title="Facebook">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-facebook">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Twitter">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-twitter">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Google">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-google">
                          <FontAwesomeIcon
                            icon={['fab', 'google']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow title="Instagram">
                        <IconButton
                          color="primary"
                          size="medium"
                          variant="outlined"
                          className="text-instagram">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-md"
                          />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
