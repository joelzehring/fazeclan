import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-neutral-first border-2 card-border-top border-first text-center mb-4">
            <div className="py-5 px-5">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Technical Support
              </h4>
              <p className="opacity-6 font-size-md mb-3">
                He lay on his armour-like back, and if he lifted his head.
              </p>
              <Button color="secondary" variant="contained">
                <span className="font-weight-bold">Send Email</span>
              </Button>
            </div>
          </Card>
          <Card className="card-box bg-composed-wrapper bg-plum-plate border-0 text-center mb-4">
            <div className="bg-composed-img-4 bg-composed-wrapper--image rounded" />
            <div className="bg-composed-wrapper--content text-light p-5">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Technical Support
              </h4>
              <p className="opacity-6 font-size-md mb-3">
                He lay on his armour-like back, and if he lifted his head.
              </p>
              <Button color="primary" variant="contained">
                <span className="font-weight-bold">Send Email</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-neutral-danger border-2 card-border-top border-danger text-center mb-4">
            <div className="py-5 px-5">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Knowledge Base Software
              </h4>
              <p className="opacity-6 font-size-md mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <Button color="secondary" variant="contained">
                <span className="font-weight-bold">Contact us</span>
              </Button>
            </div>
          </Card>
          <Card className="card-box bg-composed-wrapper bg-midnight-bloom border-0 text-center mb-4">
            <div className="bg-composed-img-2 bg-composed-wrapper--image rounded" />
            <div className="bg-composed-wrapper--content text-light p-5">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Knowledge Base Software
              </h4>
              <p className="opacity-6 font-size-md mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <Button color="primary" variant="contained">
                <span className="font-weight-bold">Contact us</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
