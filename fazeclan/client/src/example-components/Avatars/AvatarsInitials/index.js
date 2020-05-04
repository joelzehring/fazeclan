import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item lg={8}>
          <div className="mb-3">
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-xl">
              <div className="avatar-icon rounded text-white bg-dark shadow-none">
                EA
              </div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg">
              <div className="avatar-icon rounded text-white bg-primary">
                DK
              </div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials">
              <div className="avatar-icon rounded text-white bg-danger">RH</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
              <div className="avatar-icon rounded text-white bg-second">GG</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-xs">
              <div className="avatar-icon rounded text-white bg-first">M</div>
            </div>
          </div>
          <div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-xl">
              <div className="avatar-icon text-white bg-success">AD</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg">
              <div className="avatar-icon text-white bg-second">H</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials">
              <div className="avatar-icon text-white bg-warning">T</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-sm">
              <div className="avatar-icon text-white bg-primary">RX</div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-xs">
              <div className="avatar-icon text-white bg-dark">H</div>
            </div>
          </div>
        </Grid>
        <Grid item lg={4}>
          <div className="mb-3">
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg">
              <div className="avatar-icon rounded text-white bg-dark shadow-none">
                TE
                <div
                  className="badge badge-first badge-position badge-position--bottom-center badge-circle-inner"
                  title="Badge bottom center">
                  Badge bottom center
                </div>
              </div>
            </div>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg">
              <div className="avatar-icon rounded text-white bg-dark shadow-none">
                GH
                <div className="badge badge-primary badge-circle">Offline</div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
