import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  Popover,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const [anchorEl6, setAnchorEl6] = React.useState(null);

  const handleClickPopover1 = event => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClosePopover1 = () => {
    setAnchorEl1(null);
  };

  const handleClickPopover2 = event => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClosePopover2 = () => {
    setAnchorEl2(null);
  };

  const handleClickPopover3 = event => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClosePopover3 = () => {
    setAnchorEl3(null);
  };

  const handleClickPopover4 = event => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClosePopover4 = () => {
    setAnchorEl4(null);
  };

  const handleClickPopover5 = event => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClosePopover5 = () => {
    setAnchorEl5(null);
  };

  const handleClickPopover6 = event => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClosePopover6 = () => {
    setAnchorEl6(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);
  const open6 = Boolean(anchorEl6);

  return (
    <Fragment>
      <div className="text-center">
        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover1}>
          Example I
        </Button>
        <Popover
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClosePopover1}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg">
            <List className="text-left d-block ">
              <ListItem className="pb-0 d-block rounded-top">
                <div className="align-box-row">
                  <div>
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="pb-1 d-block">
                      John Doe{' '}
                      <small className="text-black-50">
                        (john@example.com)
                      </small>
                    </span>
                    <span className="badge badge-success">Active Account</span>
                  </div>
                </div>
                <MuiAlert className="my-2" severity="warning">
                  <b>Unpaid invoice</b> - This account will be disabled starting
                  12 January 2021
                </MuiAlert>
              </ListItem>
              <Divider />
              <ListItem className="d-block p-0">
                <div className="grid-menu grid-menu-2col">
                  <Grid container spacing={4}>
                    <Grid item sm={6}>
                      <div className="py-3 text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                            className="font-size-xxl text-info"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">$9,693</b>
                          <span className="text-black-50 d-block">revenue</span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item sm={6}>
                      <div className="py-3 text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">2,345</b>
                          <span className="text-black-50 d-block">users</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </ListItem>
              <Divider />
              <ListItem className="rounded-bottom d-block p-3 text-center">
                <Button variant="outlined" className="text-facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                </Button>
                <Button variant="outlined" className="mr-2 ml-2 text-dribbble">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </span>
                </Button>
                <Button variant="outlined" className="text-twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </ListItem>
            </List>
          </div>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover2}>
          Example II
        </Button>
        <Popover
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClosePopover2}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg">
            <List className="text-left bg-transparent">
              <ListItem>
                <div className="align-box-row">
                  <div className="align-self-start">
                    <div className="bg-premium-dark text-center text-white font-size-lg d-40 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                  <div className="pl-3">
                    <b>Blinded by desire</b>
                    <p className="text-black-50 mt-1 mb-0">
                      A wonderful serenity has taken possession.
                    </p>
                    <div className="timeline-list mt-3">
                      <div className="timeline-item timeline-item-icon">
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon-wrapper bg-danger text-white">
                            <FontAwesomeIcon icon={['far', 'gem']} />
                          </div>
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            1998
                          </h4>
                          <p>
                            Bill Clinton's presidential scandal makes it online.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Business investor meeting
                            <span className="text-info ml-2 badge badge-neutral-info">
                              New
                            </span>
                          </h4>
                          <p>
                            Mosaic, the first graphical browser, is introduced
                            to the average consumer.
                          </p>
                          <div className="mt-3">
                            <Button
                              size="small"
                              variant="contained"
                              color="primary">
                              Submit Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="bg-light p-3 text-center">
              <Button variant="contained" color="secondary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">View details</span>
              </Button>
            </div>
          </div>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover3}>
          Example III
        </Button>
        <Popover
          open={open3}
          anchorEl={anchorEl3}
          onClose={handleClosePopover3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg">
            <CardContent className="p-3">
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img alt="..." src={avatar7} />
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
                        <img alt="..." src={avatar3} />
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
            <Divider />
            <div className="bg-white p-3 text-center d-block">
              <Button color="primary" variant="contained" size="small">
                View History
              </Button>
            </div>
          </div>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover4}>
          Example IV
        </Button>
        <Popover
          open={open4}
          anchorEl={anchorEl4}
          onClose={handleClosePopover4}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg">
            <List className="text-left d-block">
              <ListItem className="pb-0 d-block rounded-top">
                <div className="align-box-row">
                  <div>
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 pl-2">
                    <span className="pb-1 d-block">John Doe</span>
                    <small className="pb-1 text-black-50 d-block">
                      John's bio description here...
                    </small>
                    <div className="divider my-2" />
                    <small className="text-black-50">
                      Deadline: <b className="text-danger">12 July 2029</b>
                    </small>
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-block py-2">
                <div className="align-box-row mb-1">
                  <div>
                    <small className="font-weight-bold">Orders</small>
                  </div>
                  <div className="ml-auto">
                    <div className="font-weight-bold text-success">348</div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-sm"
                  color="secondary"
                  value={75}
                />
                <div className="align-box-row mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <small className="ml-auto">100%</small>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-white p-3 text-center d-block">
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                className="mr-1">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'cog']} spin />
                </span>
                <span className="btn-wrapper--label">Refresh</span>
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className="ml-1">
                Remove
              </Button>
            </div>
          </div>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover5}>
          Example V
        </Button>
        <Popover
          open={open5}
          anchorEl={anchorEl5}
          onClose={handleClosePopover5}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg bg-night-sky border-0">
            <div className="px-3 py-3 text-center">
              <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                <IconButton
                  color="primary"
                  className="p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                  <FontAwesomeIcon
                    icon={['far', 'gem']}
                    className="font-size-lg"
                  />
                </IconButton>
                <div className="d-block text-white-50">Tasks</div>
              </div>
              <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                <IconButton
                  color="primary"
                  className="p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                  <FontAwesomeIcon
                    icon={['far', 'building']}
                    className="font-size-lg"
                  />
                </IconButton>
                <div className="d-block text-white-50">Reports</div>
              </div>
              <div className="mx-3 mb-2 mt-3 d-inline-block text-center">
                <IconButton
                  color="primary"
                  className="p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="font-size-lg"
                  />
                </IconButton>
                <div className="d-block text-white-50">Stats</div>
              </div>
            </div>
            <div className="divider opacity-2 bg-white" />
            <div className="text-center py-3">
              <Button color="primary" size="small" variant="contained">
                View more items
              </Button>
            </div>
          </div>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover6}>
          Example VI
        </Button>
        <Popover
          open={open6}
          anchorEl={anchorEl6}
          onClose={handleClosePopover6}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <div className="popover-custom-wrapper popover-custom-lg bg-midnight-bloom border-0">
            <List className="text-left bg-transparent">
              <ListItem className="bg-transparent">
                <div className="card-body p-2">
                  <div className="align-box-row align-items-start">
                    <div className="font-weight-bold">
                      <small className="text-white-50 d-block mb-1 text-uppercase">
                        New Accounts
                      </small>
                      <span className="font-size-xxl mt-1 text-white">
                        586,356
                      </span>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-white text-center text-success font-size-xl d-50 d-flex align-items-center justify-content-center rounded-circle">
                        <FontAwesomeIcon icon={['far', 'lightbulb']} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="text-success"
                    />
                    <span className="text-white px-1">15.4%</span>
                    <span className="text-white-50">increase this month</span>
                  </div>
                </div>
              </ListItem>
            </List>
          </div>
        </Popover>
      </div>
    </Fragment>
  );
}
