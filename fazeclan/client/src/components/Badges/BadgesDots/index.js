import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <span className="m-1 badge-circle badge badge-primary">Primary</span>
          <span className="m-1 badge-circle badge badge-second">Secondary</span>
          <span className="m-1 badge-circle badge badge-success">Success</span>
          <span className="m-1 badge-circle badge badge-danger">Danger</span>
          <span className="m-1 badge-circle badge badge-warning">Warning</span>
          <span className="m-1 badge-circle badge badge-info">Info</span>
          <span className="m-1 badge-circle badge badge-dark">Dark</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <span className="m-1 badge-circle-inner badge badge-primary">
            Primary
          </span>
          <span className="m-1 badge-circle-inner badge badge-second">
            Secondary
          </span>
          <span className="m-1 badge-circle-inner badge badge-success">
            Success
          </span>
          <span className="m-1 badge-circle-inner badge badge-danger">
            Danger
          </span>
          <span className="m-1 badge-circle-inner badge badge-warning">
            Warning
          </span>
          <span className="m-1 badge-circle-inner badge badge-info">Info</span>
          <span className="m-1 badge-circle-inner badge badge-dark">Dark</span>
        </Grid>
      </Grid>
    </Fragment>
  );
}
