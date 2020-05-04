import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-neutral-success p-3 mb-4">
            <div className="d-flex align-items-center py-4 px-5 justify-content-between">
              <div className="pr-2">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Technical Support
                </h4>
                <p className="opacity-6 font-size-md mb-0">
                  He lay on his armour-like back, and if he lifted his head.
                </p>
              </div>
              <Button
                color="secondary"
                variant="contained"
                className="text-nowrap">
                <span className="font-weight-bold">Send Email</span>
              </Button>
            </div>
          </Card>
          <Card className="card-box bg-composed-wrapper bg-slick-carbon border-0 mb-4">
            <div className="bg-composed-img-5 bg-composed-wrapper--image" />
            <div className="bg-composed-wrapper--content text-light d-flex align-items-center p-5 justify-content-between">
              <div className="pr-2">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Technical Support
                </h4>
                <p className="opacity-6 font-size-md mb-0">
                  He lay on his armour-like back, and if he lifted his head.
                </p>
              </div>
              <Button
                color="primary"
                variant="contained"
                className="text-nowrap">
                <span className="font-weight-bold">Send Email</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-neutral-warning p-3 mb-4">
            <div className="d-flex align-items-center py-4 px-5 justify-content-between">
              <div className="pr-2">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Knowledge Base Software
                </h4>
                <p className="opacity-6 font-size-md mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem.
                </p>
              </div>
              <Button
                color="secondary"
                variant="contained"
                className="text-nowrap">
                <span className="font-weight-bold">Contact</span>
              </Button>
            </div>
          </Card>
          <Card className="card-box bg-composed-wrapper bg-vicious-stance border-0 mb-4">
            <div className="bg-composed-img-3 bg-composed-wrapper--image" />
            <div className="bg-composed-wrapper--content text-light d-flex align-items-center p-5 justify-content-between">
              <div className="pr-2">
                <h4 className="font-size-xl font-weight-bold mb-2">
                  Knowledge Base Software
                </h4>
                <p className="opacity-6 font-size-md mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem.
                </p>
              </div>
              <Button
                color="primary"
                variant="contained"
                className="text-nowrap">
                <span className="font-weight-bold">Contact</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
