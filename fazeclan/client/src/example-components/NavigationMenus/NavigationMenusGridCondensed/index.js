import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card, Button, Tooltip } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="p-2 h-100 text-center d-flex align-items-center justify-content-center">
            <Tooltip arrow title="Menu Example">
              <Button
                color="inherit"
                variant="outlined"
                className="m-1 d-inline-flex text-white border-0 align-items-center justify-content-center bg-sunny-morning text-center font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'comment-dots']}
                  className="font-size-xl"
                />
              </Button>
            </Tooltip>
            <Tooltip arrow title="Menu Example">
              <Button
                color="inherit"
                variant="outlined"
                className="m-1 d-inline-flex text-white border-0 align-items-center justify-content-center bg-strong-bliss text-center font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-xl"
                />
              </Button>
            </Tooltip>
            <Tooltip arrow title="Menu Example">
              <Button
                color="inherit"
                variant="outlined"
                className="m-1 d-inline-flex text-white border-0 align-items-center justify-content-center bg-night-sky text-center font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-xl"
                />
              </Button>
            </Tooltip>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box bg-premium-dark border-0">
            <div className="p-2 text-center menu-items-container">
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-love-kiss d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'question-circle']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-ripe-malin d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'building']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-grow-early d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-arielle-smile d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-night-fade d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'eye']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Menu example">
                <Button
                  color="primary"
                  className="m-3 p-0 border-0 bg-strong-bliss d-inline-flex align-items-center justify-content-center text-center d-70 rounded-circle card-box-hover-rise-alt">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="font-size-xxl text-white"
                  />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
