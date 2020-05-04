import React, { Fragment } from 'react';

import { Grid, Divider } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';

export default function LivePreviewExample() {
  const [value, setValue] = React.useState(2);
  return (
    <Fragment>
      <Grid container spacing={4} className="text-center">
        <Grid item xs={12} sm={6}>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Controlled
          </h5>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Pristine
          </h5>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Rating name="pristine" value={null} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Read only
          </h5>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Rating name="read-only" value={value} readOnly />
          </div>

          <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
            Disabled
          </h5>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Rating name="disabled" value={value} disabled />
          </div>
        </Grid>
      </Grid>

      <Divider className="mt-3 mb-5" />

      <div className="m-3 d-flex align-items-center justify-content-center">
        <Rating name="size-small" defaultValue={2} size="small" />
      </div>
      <div className="m-3 d-flex align-items-center justify-content-center">
        <Rating name="size-medium" defaultValue={2} />
      </div>
      <div className="m-3 d-flex align-items-center justify-content-center">
        <Rating name="size-large" defaultValue={2} size="large" />
      </div>
    </Fragment>
  );
}
