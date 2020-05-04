import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <List>
          <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-center">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="avatar-icon-wrapper mr-0 mr-md-3">
              <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                <span className="badge-circle p-top-a badge badge-success">
                  Online
                </span>
                <div className="rounded overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
            </a>
            <div className="d-flex flex-grow-1 pl-1 flex-column">
              <div className="d-flex flex-column flex-xl-row justify-content-between">
                <div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold btn text-black p-0">
                    Trystan Russo
                  </a>
                  <div className="d-block d-md-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={['far', 'envelope']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">
                      russotry@russo.com
                    </span>

                    <FontAwesomeIcon
                      icon={['far', 'address-card']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">Project Manager</span>

                    <FontAwesomeIcon icon={['far', 'map']} className="mr-2" />
                    <span className="text-black-50">San Francisco, USA</span>
                  </div>
                </div>
                <div className="pb-3 pt-1 py-xl-0">
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    className="mr-2 font-size-xs font-weight-bold">
                    Chat
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    className="text-uppercase font-size-xs font-weight-bold">
                    Profile
                  </Button>
                </div>
              </div>
              <div className="d-block d-xl-flex justify-content-between align-items-center">
                <p className="text-black-50 mb-0 font-size-sm pr-0 pr-xl-4">
                  McClintock's eye for detail certainly helped narrow the
                  whereabouts.
                </p>
                <div className="d-flex flex-grow-1 pl-0 pl-xl-5 align-items-center">
                  <div className="text-black-50">Progress</div>
                  <LinearProgress
                    className="flex-grow-1 mx-2"
                    color="primary"
                    value={56}
                  />
                  <div className="font-weight-bold font-size-lg">56%</div>
                </div>
              </div>
            </div>
          </ListItem>
          <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-center">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="avatar-icon-wrapper mr-0 mr-md-3">
              <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                <span className="badge-position badge-position--bottom-right badge-circle badge badge-info">
                  Offline
                </span>
                <div className="rounded overflow-hidden bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                  <span>HS</span>
                </div>
              </div>
            </a>
            <div className="d-flex flex-grow-1 pl-1 flex-column">
              <div className="d-flex flex-column flex-xl-row justify-content-between">
                <div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold btn text-black p-0">
                    Zara Wagstaff
                  </a>
                  <div className="d-block d-md-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={['far', 'envelope']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">zara@wags.com</span>

                    <FontAwesomeIcon
                      icon={['far', 'address-card']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">UX Consultant</span>

                    <FontAwesomeIcon icon={['far', 'map']} className="mr-2" />
                    <span className="text-black-50">London, UK</span>
                  </div>
                </div>
                <div className="pb-3 pt-1 py-xl-0">
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    className="mr-2 font-size-xs font-weight-bold">
                    Chat
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    className="text-uppercase font-size-xs font-weight-bold">
                    Profile
                  </Button>
                </div>
              </div>
              <div className="d-block d-xl-flex justify-content-between align-items-center">
                <p className="text-black-50 mb-0 font-size-sm pr-0 pr-xl-4">
                  A 1914 English translation by Harris Rackham reads.
                </p>
                <div className="d-flex flex-grow-1 pl-0 pl-xl-5 align-items-center">
                  <div className="text-black-50">Progress</div>
                  <LinearProgress
                    className="flex-grow-1 mx-2"
                    color="secondary"
                    value={32}
                  />
                  <div className="font-weight-bold font-size-lg">32%</div>
                </div>
              </div>
            </div>
          </ListItem>
        </List>
      </Card>
    </Fragment>
  );
}
