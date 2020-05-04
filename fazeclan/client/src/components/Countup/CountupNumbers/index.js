import React, { Fragment } from 'react';

import { Grid, Card, Divider } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="p-4">
              <div className="divider-v divider-v-lg" />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Reports</b>
                      <div className="text-black-50">Monthly sales reports</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      <CountUp
                        start={0}
                        end={2.363}
                        duration={12}
                        deplay={2}
                        separator=""
                        decimals={3}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>User</b>
                      <div className="text-black-50">Visitors last week</div>
                    </div>
                    <div className="font-weight-bold text-success font-size-xl">
                      <CountUp
                        start={0}
                        end={584}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="+"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Sales</b>
                      <div className="text-black-50">
                        Total average weekly report
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      <CountUp
                        start={0}
                        end={483}
                        duration={12}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="p-4">
              <div className="divider-v divider-v-lg" />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Stats</b>
                      <div className="text-black-50">Last month targets</div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      <CountUp
                        start={0}
                        end={2.33}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="$ "
                        suffix="M"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Payments</b>
                      <div className="text-black-50">Week's expenses</div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      <CountUp
                        start={0}
                        end={123.305}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="- $"
                        suffix=""
                        decimals={3}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Orders</b>
                      <div className="text-black-50">
                        Total products ordered
                      </div>
                    </div>
                    <div className="font-weight-bold text-warning font-size-xl">
                      <CountUp
                        start={0}
                        end={65}
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
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="p-4">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Deliveries</b>
                      <div className="text-black-50">
                        Deliveries total report
                      </div>
                    </div>
                    <div className="font-weight-bold text-info font-size-xl">
                      <CountUp
                        start={0}
                        end={33.1}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="$ "
                        suffix=" k"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Tasks</b>
                      <div className="text-black-50">Pending task actions</div>
                    </div>
                    <div className="font-weight-bold text-success font-size-xl">
                      <CountUp
                        start={0}
                        end={34}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="+"
                        suffix="%"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <b>Issues</b>
                      <div className="text-black-50">
                        Server errors and issues
                      </div>
                    </div>
                    <div className="font-weight-bold text-danger font-size-xl">
                      <CountUp
                        start={0}
                        end={346}
                        duration={12}
                        deplay={2}
                        separator=""
                        prefix="+"
                        suffix="%"
                        decimals={0}
                        decimal=","
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}
