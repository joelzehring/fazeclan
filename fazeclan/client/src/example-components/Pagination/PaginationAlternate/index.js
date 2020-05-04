import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4} className="text-center">
        <Grid item xs={12} md={6}>
          <div className="my-3">
            <Pagination count={10} />
          </div>
          <div className="my-3">
            <Pagination count={10} color="primary" />
          </div>
          <div className="my-3">
            <Pagination count={10} color="secondary" />
          </div>
          <div className="my-3">
            <Pagination count={10} disabled />
          </div>

          <div className="divider my-4" />

          <div className="my-3">
            <Pagination count={10} shape="rounded" />
          </div>
          <div className="my-3">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>

          <div className="divider my-4" />

          <div className="my-3">
            <Pagination count={10} showFirstButton showLastButton />
          </div>
          <div className="my-3">
            <Pagination count={10} hidePrevButton hideNextButton />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="my-3">
            <Pagination count={10} variant="outlined" />
          </div>
          <div className="my-3">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
          <div className="my-3">
            <Pagination count={10} variant="outlined" color="secondary" />
          </div>
          <div className="my-3">
            <Pagination count={10} variant="outlined" disabled />
          </div>

          <div className="divider my-4" />

          <div className="my-3">
            <Pagination count={10} size="small" />
          </div>
          <div className="my-3">
            <Pagination count={10} />
          </div>
          <div className="my-3">
            <Pagination count={10} size="large" />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
