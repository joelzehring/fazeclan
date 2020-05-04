import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <div className="m-3">
            <div className="rounded position-relative">
              <span className="ribbon-horizontal ribbon-horizontal--first">
                <span>Special Offer</span>
              </span>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="text-white ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--danger">
                <span>Bottom positioned ribbon</span>
              </a>
              <div className="rounded overflow-hidden card-img-wrapper">
                <img src={stock1} className="rounded card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="m-3">
            <div className="rounded position-relative">
              <span className="ribbon-horizontal ribbon-horizontal--primary font-weight-normal font-size-lg">
                <span>Primary ribbon</span>
              </span>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="text-white ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--success">
                <span>Bottom success</span>
              </a>
              <div className="rounded overflow-hidden card-img-wrapper">
                <img src={stock2} className="rounded card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="m-3">
            <div className="rounded position-relative">
              <span className="ribbon-horizontal ribbon-horizontal--warning">
                <span>Warning ribbon</span>
              </span>
              <a
                href="#/"
                onClick={e => e.preventDefault()}
                className="text-white ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--info">
                <span>Bottom info ribbon</span>
              </a>
              <div className="rounded overflow-hidden card-img-wrapper">
                <img src={stock3} className="rounded card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
