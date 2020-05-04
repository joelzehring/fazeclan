import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Fab,
  IconButton,
  Card,
  CardContent,
  Button,
  Tooltip,
  TextField
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box">
        <div className="card-header">
          <div className="card-header--title">
            <small>Messenger</small>
            <b>Talking to Kate</b>
          </div>
          <div className="card-header--actions">
            <Tooltip arrow title="Send new message">
              <Fab size="small" color="primary">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="font-size-sm"
                />
              </Fab>
            </Tooltip>
          </div>
        </div>
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <CardContent className="p-3">
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hello, John.</p>
                        <p>This is Kenny. How are you?</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Hey, Kate.</p>
                        <p>I'm attaching the pictures you requested below:</p>
                        <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                          <div>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people1}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                            <a href="#/" onClick={e => e.preventDefault()}>
                              <img
                                src={people2}
                                alt="..."
                                width="54"
                                className="img-fluid rounded m-1 shadow-sm"
                              />
                            </a>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Thanks.</p>
                        <p>Really appreciate it!</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar7} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Bye for now, talk to you later.</p>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:01 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
                <div className="chat-item chat-item-reverse p-2 mb-2">
                  <div className="align-box-row flex-row-reverse">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img src={avatar3} alt="..." />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Almost forgot about your tasks.</p>
                        <p>
                          <b>Check the links below:</b>
                        </p>
                        <Card className="bg-premium-dark p-2 mt-3 mb-2">
                          <div className="text-center py-2">
                            <Tooltip arrow title="Menu Example">
                              <IconButton
                                color="primary"
                                className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                <FontAwesomeIcon icon={['fas', 'lemon']} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip arrow title="Menu Example">
                              <IconButton
                                color="primary"
                                className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                <AddCircleTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip arrow title="Menu Example">
                              <IconButton
                                color="primary"
                                className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle">
                                <FontAwesomeIcon icon={['far', 'gem']} />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </Card>
                      </div>
                      <small className="mt-2 d-block text-black-50">
                        <FontAwesomeIcon
                          icon={['far', 'clock']}
                          className="mr-1 opacity-5"
                        />
                        11:03 AM | Yesterday
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </PerfectScrollbar>
        </div>
        <div className="card-footer bg-light p-4">
          <div>
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Write your message and hit enter to send..."
            />
          </div>
          <div className="align-box-row mt-3">
            <div className="align-items-center">
              <Tooltip arrow title="Add audio file">
                <IconButton color="default" className="text-success">
                  <FontAwesomeIcon
                    icon={['far', 'file-audio']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Add video file">
                <IconButton color="default" className="text-danger">
                  <FontAwesomeIcon
                    icon={['far', 'file-video']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Upload Documents">
                <IconButton color="default" className="text-info">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="font-size-xl"
                  />
                </IconButton>
              </Tooltip>
            </div>
            <div className="ml-auto">
              <Button size="small" variant="contained" color="primary">
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
