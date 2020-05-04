import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box-alt card-border-top border-success mb-4 pb-4">
            <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
              Lightweight
            </h3>
            <p className="card-text px-4 mb-4">
              Insects and flies, then I feel the presence of the indescribable
              forms Almighty, who formed us in his own image.
            </p>
            <Button
              color="primary"
              className="text-first mb-2"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box-alt card-border-top border-first mb-4 pb-4">
            <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
              Simple to use
            </h3>
            <p className="card-text px-4 mb-4">
              When, while the lovely valley teems with vapour present moment
              around me, and the meridian sun strike.
            </p>
            <Button
              color="primary"
              className="text-first mb-2"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box-alt card-border-top border-warning mb-4 pb-4">
            <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
              Starter Templates
            </h3>
            <p className="card-text px-4 mb-4">
              Exquisite sense of mere tranquil existence, that I neglect my
              foliage world trickling tree artist talents.
            </p>
            <Button
              color="primary"
              className="text-first mb-2"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
