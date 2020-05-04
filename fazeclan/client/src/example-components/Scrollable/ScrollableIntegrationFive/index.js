import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  IconButton,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box">
        <div className="card-header">
          <div className="card-header--title">
            <small className="d-block text-uppercase mt-1">Targets</small>
            <b>Monthly Stats</b>
          </div>
          <div className="card-header--actions">
            <IconButton
              color="primary"
              className="text-primary"
              title="View options">
              <FontAwesomeIcon
                icon={['fas', 'ellipsis-h']}
                className="font-size-xl"
              />
            </IconButton>
          </div>
        </div>
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar7} alt="..." />
                      </div>
                    </a>
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
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar5} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress value={44} color="primary" />
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
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar1} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress value={29} color="primary" />
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
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      title="View details"
                      placement="right">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img src={avatar2} alt="..." />
                      </div>
                    </a>
                  </div>
                  <div className="flex-grow-1">
                    <LinearProgress value={38} color="secondary" />
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
          </PerfectScrollbar>
        </div>
        <div className="card-footer bg-light text-center">
          <Button variant="contained" color="primary">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['far', 'question-circle']} />
            </span>
            <span className="btn-wrapper--label">Generate reports</span>
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
