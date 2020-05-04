import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Typography, Card, Button, List, ListItem } from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box">
        <div className="bg-composed-wrapper bg-vicious-stance">
          <div className="bg-composed-wrapper--image bg-composed-img-5" />
          <div className="bg-composed-wrapper--content text-light text-center p-4">
            <h5 className="mb-1">Scrollable</h5>
            <p className="mb-0 opacity-7">This menu box is scrollable (sm)</p>
          </div>
        </div>
        <div className="scroll-area-xs shadow-overflow">
          <PerfectScrollbar>
            <List className=" flex-column py-2">
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <AddCircleTwoToneIcon />
                </div>
                <span>Dashboard</span>
              </ListItem>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </div>
                <span>Layouts</span>
                <span className="ml-auto badge badge-warning">512</span>
              </ListItem>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'user-circle']} />
                </div>
                <span>Reports</span>
              </ListItem>
              <Typography className="text-black py-2 px-3" component="div">
                Others
              </Typography>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Components</span>
              </ListItem>
              <ListItem button>
                <div className="nav-link-icon opacity-6">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Services</span>
              </ListItem>
            </List>
          </PerfectScrollbar>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <Button size="small" variant="outlined" color="secondary">
            Action
          </Button>
          <Button color="primary" variant="contained" size="small">
            <span>View details</span>
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
