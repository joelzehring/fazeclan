import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Tooltip, Divider } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Button variant="contained" color="primary" className="m-3 badge-wrapper">
        <span className="badge-position badge-position--top-left badge-circle badge badge-success">
          New notifications
        </span>
        <FontAwesomeIcon icon={['far', 'bell']} />
        <span className="ml-3 badge badge-warning">
          <b>23</b> New
        </span>
      </Button>
      <Tooltip arrow title="Example Tooltip 10">
        <Button
          variant="contained"
          color="primary"
          className="badge-wrapper m-3">
          <span className="badge-position badge-position--top-center badge-circle badge badge-info">
            New notifications
          </span>
          <span>
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
      </Tooltip>
      <Tooltip arrow title="Example Tooltip 11">
        <Button
          variant="contained"
          color="primary"
          className="badge-wrapper m-3">
          <span className="badge-position badge-position--top-right badge-circle badge badge-info">
            New notifications
          </span>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
      </Tooltip>

      <Divider className="my-3" />

      <Button variant="contained" color="primary" className="m-3 badge-wrapper">
        <span className="badge-position badge-position--top-left badge-circle-inner badge badge-warning">
          New notifications
        </span>
        Button
      </Button>
      <Button variant="contained" color="primary" className="badge-wrapper m-3">
        <span className="badge-position badge-position--top-center badge-circle-inner badge badge-danger">
          New notifications
        </span>
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'keyboard']} />
        </span>
        <span className="btn-wrapper--label">Button</span>
      </Button>
      <Button variant="contained" color="primary" className="badge-wrapper m-3">
        <span className="badge-position badge-position--top-right badge-circle-inner badge badge-danger">
          New notifications
        </span>
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'lightbulb']} />
        </span>
        <span className="btn-wrapper--label">Button</span>
      </Button>

      <Divider className="my-3" />

      <Button variant="contained" color="primary" className="m-3 badge-wrapper">
        <span className="badge-position badge-position--bottom-left badge-circle badge badge-success">
          New notifications
        </span>
        <FontAwesomeIcon icon={['far', 'bell']} />
        <span className="ml-3 badge badge-warning">
          <b>23</b> New
        </span>
      </Button>
      <Tooltip arrow title="Example Tooltip 10">
        <Button
          variant="contained"
          color="primary"
          className="badge-wrapper m-3">
          <span className="badge-position badge-position--bottom-center badge-circle badge badge-info">
            New notifications
          </span>
          <span>
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
      </Tooltip>
      <Tooltip arrow title="Example Tooltip 11">
        <Button
          variant="contained"
          color="primary"
          className="badge-wrapper m-3">
          <span className="badge-position badge-position--bottom-right badge-circle badge badge-info">
            New notifications
          </span>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
      </Tooltip>

      <Divider className="my-3" />

      <Button variant="contained" color="primary" className="m-3 badge-wrapper">
        <span className="badge-position badge-position--bottom-left badge-circle-inner badge badge-warning">
          New notifications
        </span>
        Button
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="badge-wrapper m-3"
        title="Tooltip example">
        <span className="badge-position badge-position--bottom-center badge-circle-inner badge badge-info">
          New notifications
        </span>
        <span>
          <FontAwesomeIcon icon={['far', 'keyboard']} />
        </span>
      </Button>
      <Button variant="contained" color="primary" className="badge-wrapper m-3">
        <span className="badge-position badge-position--bottom-right badge-circle-inner badge badge-danger">
          New notifications
        </span>
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'lightbulb']} />
        </span>
        <span className="btn-wrapper--label">Button</span>
      </Button>
    </Fragment>
  );
}
