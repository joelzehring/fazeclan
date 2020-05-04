import React, { Fragment } from 'react';

import { Grid, Badge } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="color-swatch">
            <div className="color-swatch--bg h-auto bg-composed-wrapper bg-neutral-info">
              <div className="bg-composed-wrapper--image bg-composed-img-1" />
              <div className="bg-composed-wrapper--content p-5">
                <h5 className="mb-1">Table of contents</h5>
                <p className="mb-0 opacity-7">This is a subheading example</p>
              </div>
            </div>
            <h6 className="color-swatch--title">
              <Badge color="primary" className="m-1 text-dark">
                bg-neutral-info
              </Badge>
              <Badge color="primary" className="m-1 text-dark">
                bg-composed-img-1
              </Badge>
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="color-swatch">
            <div className="color-swatch--bg h-auto bg-composed-wrapper bg-malibu-beach">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Table of contents</h5>
                <p className="mb-0 opacity-7">This is a subheading example</p>
              </div>
            </div>
            <h6 className="color-swatch--title">
              <Badge color="primary" className="m-1 text-dark">
                bg-malibu-beach
              </Badge>
              <Badge color="primary" className="m-1 text-dark">
                bg-composed-img-2
              </Badge>
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="color-swatch">
            <div className="color-swatch--bg h-auto bg-composed-wrapper bg-danger">
              <div className="bg-composed-wrapper--image bg-composed-img-3" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Table of contents</h5>
                <p className="mb-0 opacity-7">This is a subheading example</p>
              </div>
            </div>
            <h6 className="color-swatch--title">
              <Badge color="primary" className="m-1 text-dark">
                bg-danger
              </Badge>
              <Badge color="primary" className="m-1 text-dark">
                bg-composed-img-3
              </Badge>
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="color-swatch">
            <div className="color-swatch--bg h-auto bg-composed-wrapper bg-plum-plate">
              <div className="bg-composed-wrapper--image bg-composed-img-5" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-2">Table of contents</h5>
                <p className="mb-0 opacity-7">This is a subheading example</p>
              </div>
            </div>
            <h6 className="color-swatch--title">
              <Badge color="primary" className="m-1 text-dark">
                bg-plum-plate
              </Badge>
              <Badge color="primary" className="m-1 text-dark">
                bg-composed-img-5
              </Badge>
            </h6>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
