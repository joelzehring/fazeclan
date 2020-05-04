import React, { Fragment } from 'react';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="avatar-icon-wrapper avatar-icon-lg">
        <span className="badge-circle badge badge-success">Online</span>
        <div className="avatar-icon">
          <img src={avatar7} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <span className="badge-circle badge badge-warning">Idle</span>
        <div className="avatar-icon">
          <img src={avatar7} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper avatar-icon-lg">
        <div className="badge badge-primary badge-circle">Offline</div>
        <div className="avatar-icon rounded">
          <img src={avatar7} alt="..." />
        </div>
      </div>
    </Fragment>
  );
}
