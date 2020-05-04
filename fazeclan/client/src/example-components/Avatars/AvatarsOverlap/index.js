import React, { Fragment } from 'react';

import { Avatar, Tooltip } from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <AvatarGroup>
        <Avatar alt="Remy Sharp" src={avatar1} />
        <Avatar alt="Travis Howard" src={avatar2} />
        <Avatar alt="Cindy Baker" src={avatar3} />
        <Tooltip title="Foo • Bar • Baz">
          <Avatar>+3</Avatar>
        </Tooltip>
      </AvatarGroup>

      <div className="divider my-3" />

      <div className="avatar-wrapper-overlap mb-3">
        <div className="avatar-icon-wrapper avatar-icon-xl">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-xl">
          <div className="avatar-icon">
            <img alt="..." src={avatar7} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-xl">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-xl">
          <div className="avatar-icon">
            <img alt="..." src={avatar2} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-xl">
          <div className="avatar-icon">
            <img alt="..." src={avatar6} />
          </div>
        </div>
      </div>
      <div className="avatar-wrapper-overlap mb-3">
        <div className="avatar-icon-wrapper avatar-icon-lg">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-lg">
          <div className="avatar-icon">
            <img alt="..." src={avatar7} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-lg">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-lg">
          <div className="avatar-icon">
            <img alt="..." src={avatar2} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-lg">
          <div className="avatar-icon">
            <img alt="..." src={avatar6} />
          </div>
        </div>
      </div>
      <div className="avatar-wrapper-overlap mb-3">
        <div className="avatar-icon-wrapper">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper">
          <div className="avatar-icon">
            <img alt="..." src={avatar7} />
          </div>
        </div>
        <div className="avatar-icon-wrapper">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper">
          <div className="avatar-icon">
            <img alt="..." src={avatar2} />
          </div>
        </div>
        <div className="avatar-icon-wrapper">
          <div className="avatar-icon">
            <img alt="..." src={avatar6} />
          </div>
        </div>
      </div>
      <div className="avatar-wrapper-overlap mb-3">
        <div className="avatar-icon-wrapper avatar-icon-sm">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-sm">
          <div className="avatar-icon">
            <img alt="..." src={avatar7} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-sm">
          <div className="avatar-icon">
            <img alt="..." src={avatar1} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-sm">
          <div className="avatar-icon">
            <img alt="..." src={avatar2} />
          </div>
        </div>
        <div className="avatar-icon-wrapper avatar-icon-sm">
          <div className="avatar-icon">
            <img alt="..." src={avatar6} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
