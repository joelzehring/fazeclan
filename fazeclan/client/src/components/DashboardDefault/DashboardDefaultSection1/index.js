import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-first p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div className="text-black-50">Veni</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="font-size-sm text-danger mr-2"
              />
              <div>$3,485</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+36%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-success p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-success text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div className="text-black-50">Vidi</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="font-size-sm text-warning mr-2"
              />
              <div>25%</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+65%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-danger p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-danger text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Vici</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-success mr-2"
              />
              <div>4867</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+22%</b> from last month
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className="card-box border-0 card-shadow-primary p-4 mb-4">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-primary text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-black-50">Lines of Code this week</div>
            </div>
            <div className="display-3 text-center line-height-sm text-black-50 text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-down']}
                className="font-size-sm text-first mr-2"
              />
              <div>433</div>
            </div>
            <div className="text-black-50 text-center opacity-6 pt-3">
              <b>+32</b>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
