import React, { Fragment } from 'react';

import { Grid, Card } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="text-black-50 pb-2">Expenses</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0 text-black">
                <small className="pr-1 text-black-50">$</small>
                <span className="text-success">
                  <CountUp
                    start={0}
                    end={4.986}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
              </h3>
              <div className="text-success font-weight-bold">+34%</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4">
            <div className="text-black-50 pb-2">Sales</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0 text-black">
                <small className="pr-1 text-black-50">$</small>
                <span className="text-warning">
                  <CountUp
                    start={0}
                    end={4.546}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h3>
              <div className="text-first font-weight-bold">0%</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4 bg-night-sky">
            <div className="text-white-50 pb-2">Income</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0">
                <small className="pr-1 text-white-50">$</small>
                <span className="text-white">3,21M</span>
              </h3>
              <div className="text-warning font-weight-bold">-22%</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="p-3 mb-4 bg-amy-crisp">
            <div className="text-white-50 pb-2">Spendings</div>
            <div className="d-flex justify-content-between align-items-end">
              <h3 className="display-4 mb-0">
                <small className="pr-1 text-white-50">$</small>
                <span className="text-white">
                  <CountUp
                    start={0}
                    end={35.465}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
              </h3>
              <div className="text-second font-weight-bold">+65%</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
