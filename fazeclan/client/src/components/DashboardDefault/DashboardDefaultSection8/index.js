import React, { Fragment } from 'react';

import { Grid, LinearProgress, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <Card className="card-box mb-4">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <div className="p-4">
                  <div className="divider-v divider-v-lg" />
                  <div className="d-flex align-items-center pb-4 justify-content-between">
                    <div>
                      <div className="font-weight-bold">Deliveries</div>
                      <span className="text-black-50 d-block">
                        Total deliveries to date
                      </span>
                    </div>
                    <div className="display-4 font-weight-bold text-danger">
                      <CountUp
                        start={0}
                        end={23.485}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal="."
                      />
                    </div>
                  </div>
                  <div>
                    <LinearProgress color="primary" value={85} />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className="p-4">
                  <div className="divider-v divider-v-lg" />
                  <div className="d-flex align-items-center pb-4 justify-content-between">
                    <div>
                      <div className="font-weight-bold">Orders</div>
                      <span className="text-black-50 d-block">
                        Total orders to date
                      </span>
                    </div>
                    <div className="display-4 font-weight-bold text-info">
                      $12,346
                    </div>
                  </div>
                  <div>
                    <LinearProgress color="primary" value={76} />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="p-4">
                  <div className="d-flex align-items-center pb-4 justify-content-between">
                    <div>
                      <div className="font-weight-bold">Customers</div>
                      <span className="text-black-50 d-block">
                        Total customers to date
                      </span>
                    </div>
                    <div className="display-4 font-weight-bold text-success">
                      $ 2,3M
                    </div>
                  </div>
                  <div>
                    <LinearProgress color="secondary" value={53} />
                    <div className="align-box-row progress-bar--label mt-2 text-muted">
                      <div>Target</div>
                      <div className="ml-auto">100%</div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
