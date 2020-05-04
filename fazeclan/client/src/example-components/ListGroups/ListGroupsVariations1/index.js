import React, { Fragment } from 'react';

import {
  Grid,
  LinearProgress,
  Card,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <List>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Orders</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="secondary"
                  value={34}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Sales</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>$</small>
                      2.3M
                    </div>
                  </div>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={39}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Users</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-info">
                      <small>#</small>
                      87
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="primary"
                  value={51}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <List>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar7} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={61}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar5} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={44}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={29}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListItem>
              <ListItem>
                <div className="align-box-row w-100">
                  <div className="mr-4">
                    <Tooltip arrow title="View details" placement="right">
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="avatar-icon-wrapper avatar-icon-lg m-0">
                        <div className="dot-badge" />
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={38}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
