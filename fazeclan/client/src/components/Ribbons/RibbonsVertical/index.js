import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid } from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <div className="card card-transparent m-4">
            <span className="ribbon-vertical ribbon-vertical--danger">
              <span>New</span>
            </span>
            <span className="ribbon-vertical ribbon-vertical--first ribbon-vertical--right text-uppercase">
              <span>-30%</span>
            </span>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <span className="mr-2 badge badge-success badge-pill">
                  Success
                </span>
                <span className="text-info badge badge-neutral-info badge-pill">
                  Info
                </span>
              </div>
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="card card-transparent m-4">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="text-white ribbon-vertical ribbon-vertical--warning">
              <span>
                <FontAwesomeIcon
                  icon={['far', 'keyboard']}
                  className="font-size-lg"
                />
              </span>
            </a>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="text-white ribbon-vertical ribbon-vertical--success ribbon-vertical--right text-uppercase">
              <span>
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-lg"
                />
              </span>
            </a>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card card-transparent m-4">
            <span className="ribbon-vertical ribbon-vertical--primary text-uppercase">
              <span>New</span>
            </span>
            <span className="ribbon-vertical ribbon-vertical--info ribbon-vertical--right text-uppercase">
              <span>-30%</span>
            </span>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-info">NEW</div>
              </div>
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
