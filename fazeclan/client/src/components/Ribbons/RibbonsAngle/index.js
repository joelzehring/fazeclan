import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box text-center m-4 pb-4">
            <span className="ribbon-angle ribbon-angle--top-right ribbon-primary">
              <small>Primary</small>
            </span>
            <span className="ribbon-angle ribbon-angle--top-left ribbon-danger">
              <small>Danger</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-right ribbon-success">
              <small>Success</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-left ribbon-warning">
              <small>Warning</small>
            </span>
            <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
              Archer towers
            </h3>
            <p className="card-text px-5 mb-4">
              Towers of medieval castles were usually made of stone or sometimes
              (but rarely) wood. Often toward the later part of the era they
              included battlements and arrow loops.
            </p>
            <Button
              color="primary"
              className="text-first mb-2"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box text-center m-4 pb-4">
            <span className="ribbon-angle ribbon-angle--top-right ribbon-dark">
              <small>Dark</small>
            </span>
            <span className="ribbon-angle ribbon-angle--top-left ribbon-first">
              <small>First</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-right ribbon-info">
              <small>Info</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-left ribbon-second">
              <small>Second</small>
            </span>
            <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
              City walls
            </h3>
            <p className="card-text px-5 mb-4">
              An exact nature of the walls of a medieval town or city would
              depend on the resources available for building them, the nature of
              the terrain, and the perceived threat.
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
