import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

import { BarLoader } from 'react-spinners';

import {
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader
} from 'react-spinners';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="d-flex flex-row text-center flex-wrap justify-content-center">
        <Card className="rounded-sm card-box p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BarLoader color={'var(--danger)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Danger</p>
        </Card>

        <Card className="rounded-sm card-box p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BeatLoader color={'var(--first)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">First</p>
        </Card>

        <Card className="rounded-sm card-box p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BounceLoader color={'var(--success)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Success</p>
        </Card>

        <Card className="rounded-sm card-box p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <CircleLoader color={'var(--warning)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Warning</p>
        </Card>

        <Card className="rounded-sm card-box p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <ClimbingBoxLoader color={'var(--info)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Info</p>
        </Card>
      </div>
    </Fragment>
  );
}
