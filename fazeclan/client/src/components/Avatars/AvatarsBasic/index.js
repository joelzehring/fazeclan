import React, { Fragment } from 'react';

import { Avatar } from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar1} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar2} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar3} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar4} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar5} alt="..." />
        </div>
      </div>
      <div className="avatar-icon-wrapper">
        <div className="avatar-icon">
          <img src={avatar6} alt="..." />
        </div>
      </div>

      <div className="divider my-3" />

      <div className="d-flex">
        <Avatar className="m-1" alt="Remy Sharp" src={avatar7} />
        <Avatar className="m-1" alt="Travis Howard" src={avatar1} />
        <Avatar className="m-1" alt="Cindy Baker" src={avatar2} />
      </div>
    </Fragment>
  );
}
