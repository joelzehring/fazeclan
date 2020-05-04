import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} className="position-relative">
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={993}
                            duration={12}
                            deplay={2}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix="$ "
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} className="position-relative">
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'lightbulb']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={2345}
                            duration={12}
                            deplay={2}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} className="position-relative">
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <div className="text-center py-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={1024}
                            duration={9}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">orders</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} className="position-relative">
                <div className="divider-v divider-v-lg" />
                <Grid container spacing={4}>
                  <Grid item>
                    <div className="d-flex p-4">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="display-4 text-success"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={2346}
                            duration={5}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} className="position-relative">
                <Grid container spacing={4}>
                  <Grid item>
                    <div className="d-flex p-4">
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="display-4 text-danger"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={7764}
                            duration={5}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">orders</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
