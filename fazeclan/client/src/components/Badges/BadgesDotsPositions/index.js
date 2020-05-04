import React, { Fragment } from 'react';

import { Divider } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="p-3">
        <div className="card-box w-100 demo-box-positions bg-neutral-dark border-dark badge-wrapper badge-wrapper">
          <div
            className="badge badge-first badge-position badge-position--top-left badge-circle"
            title="Badge top left">
            Badge top left
          </div>
          <div
            className="badge badge-danger badge-position badge-position--top-center badge-circle"
            title="Badge top center">
            Badge top center
          </div>
          <div
            className="badge badge-success badge-position badge-position--top-right badge-circle"
            title="Badge top right">
            Badge top right
          </div>

          <div
            className="badge badge-primary badge-position badge-position--bottom-left badge-circle"
            title="Badge bottom left">
            Badge bottom left
          </div>
          <div
            className="badge badge-warning badge-position badge-position--bottom-center badge-circle"
            title="Badge bottom center">
            Badge bottom center
          </div>
          <div
            className="badge badge-info badge-position badge-position--bottom-right badge-circle"
            title="Badge bottom right">
            Badge bottom right
          </div>
        </div>
      </div>

      <Divider className="my-3" />

      <div className="p-3">
        <div className="card-box w-100 demo-box-positions bg-neutral-dark border-dark badge-wrapper badge-wrapper">
          <div
            className="badge badge-primary badge-position badge-position--top-left badge-circle-inner"
            title="Badge top left">
            Badge top left
          </div>
          <div
            className="badge badge-danger badge-position badge-position--top-center badge-circle-inner"
            title="Badge top center">
            Badge top center
          </div>
          <div
            className="badge badge-success badge-position badge-position--top-right badge-circle-inner"
            title="Badge top right">
            Badge top right
          </div>

          <div
            className="badge badge-first badge-position badge-position--bottom-left badge-circle-inner"
            title="Badge bottom left">
            Badge bottom left
          </div>
          <div
            className="badge badge-second badge-position badge-position--bottom-center badge-circle-inner"
            title="Badge bottom center">
            Badge bottom center
          </div>
          <div
            className="badge badge-warning badge-position badge-position--bottom-right badge-circle-inner"
            title="Badge bottom right">
            Badge bottom right
          </div>
        </div>
      </div>
    </Fragment>
  );
}
