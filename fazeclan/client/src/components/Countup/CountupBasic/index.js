import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4} className="text-center">
        <Grid item xs={12} md={6} lg={4}>
          <div className="display-2 font-weight-bold py-2">
            <CountUp
              start={0}
              end={4.385}
              duration={12}
              deplay={2}
              separator=" "
              decimals={3}
              decimal=","
              prefix="$ "
              suffix=""
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="display-2 font-weight-bold py-2">
            <CountUp
              start={0}
              end={22.76}
              duration={12}
              deplay={2}
              separator=" "
              decimals={2}
              decimal=","
              prefix="$ "
              suffix=" M"
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="display-2 font-weight-bold py-2">
            <CountUp
              start={0}
              end={498}
              duration={12}
              deplay={2}
              separator=""
              decimals={0}
              decimal=","
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
