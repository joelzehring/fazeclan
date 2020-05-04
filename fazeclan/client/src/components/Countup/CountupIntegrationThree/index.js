import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Box, Badge, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4 p-4 text-center">
            <Box className="card-tr-actions">
              <IconButton color="secondary" className="font-size-xl">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-header-alt">
              <div className="font-weight-bold font-size-lg mb-0 text-black">
                Financial year
              </div>
              <p className="text-black-50">Expenses statistics to date</p>
            </div>
            <div className="divider my-4" />
            <h3 className="mb-0 display-3 mt-1 font-weight-bold">
              <small className="opacity-7">$</small>
              <span>
                <CountUp
                  start={0}
                  end={458.695}
                  duration={4}
                  separator=""
                  decimals={3}
                  decimal=","
                  prefix=""
                  suffix=""
                />
              </span>
            </h3>
            <div className="divider my-4" />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <span className="opacity-6 pb-2">Current month</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6">$</small>
                    <span>
                      <CountUp
                        start={0}
                        end={466.362}
                        duration={12}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </span>
                  <Badge color="secondary" className="ml-2 text-danger">
                    -8%
                  </Badge>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span className="opacity-6 pb-2">Last year</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6">$</small>
                    <span>
                      <CountUp
                        start={0}
                        end={34.546}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="+"
                        suffix="%"
                        decimals={3}
                        decimal=","
                      />
                    </span>
                  </span>
                  <Badge color="secondary" className="text-success ml-2">
                    +13%
                  </Badge>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card className="card-box card-shadow-first p-4 mb-4">
                <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-down']}
                    className="font-size-sm text-danger mr-2"
                  />
                  <div>
                    <CountUp
                      start={0}
                      end={348.56}
                      duration={12}
                      deplay={2}
                      separator=""
                      decimals={2}
                      prefix="$ "
                      decimal=","
                    />
                  </div>
                </div>
                <div className="text-black-50 text-center opacity-6 pt-3">
                  <b>
                    <CountUp
                      start={0}
                      end={36}
                      duration={12}
                      deplay={2}
                      separator=""
                      decimals={0}
                      prefix="+"
                      suffix="%"
                      decimal=","
                    />
                  </b>{' '}
                  from last month
                </div>
              </Card>
              <Card className="card-box p-4 mb-4">
                <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                  <FontAwesomeIcon
                    icon={['far', 'dot-circle']}
                    className="font-size-sm text-warning mr-2"
                  />
                  <div>
                    <CountUp
                      start={0}
                      end={436}
                      duration={12}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </div>
                </div>
                <div className="text-black-50 text-center opacity-6 pt-3">
                  <b>
                    <CountUp
                      start={0}
                      end={65}
                      duration={12}
                      deplay={2}
                      separator=""
                      decimals={0}
                      prefix="+"
                      suffix="%"
                      decimal=","
                    />
                  </b>{' '}
                  from last month
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="card-box p-4 mb-4">
                <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="font-size-sm text-success mr-2"
                  />
                  <div>
                    <CountUp
                      start={0}
                      end={48.67}
                      duration={12}
                      deplay={2}
                      separator=""
                      decimals={2}
                      decimal=","
                    />
                  </div>
                </div>
                <div className="text-black-50 text-center opacity-6 pt-3">
                  <b>
                    <CountUp
                      start={0}
                      end={22}
                      duration={12}
                      deplay={2}
                      separator=""
                      prefix="+"
                      suffix="%"
                      decimals={0}
                      decimal=","
                    />
                  </b>{' '}
                  from last month
                </div>
              </Card>
              <Card className="card-box bg-premium-dark p-4 mb-4">
                <div className="display-3 text-center line-height-sm text-white-50 text-center d-flex align-items-center pt-3 justify-content-center">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-down']}
                    className="font-size-sm text-first mr-2"
                  />
                  <div>
                    <CountUp
                      start={0}
                      end={433}
                      duration={12}
                      deplay={2}
                      separator=""
                      prefix=""
                      suffix=""
                      decimals={0}
                      decimal=","
                    />
                  </div>
                </div>
                <div className="text-white-50 text-center opacity-6 pt-3">
                  <b>
                    <CountUp
                      start={0}
                      end={35}
                      duration={12}
                      deplay={2}
                      separator=""
                      prefix="+"
                      suffix="%"
                      decimals={0}
                      decimal=","
                    />
                  </b>{' '}
                  from last month
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
