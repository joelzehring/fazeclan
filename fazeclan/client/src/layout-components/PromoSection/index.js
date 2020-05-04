import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Popover, Button, Tooltip } from '@material-ui/core';

export default function PromoSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'social-share-popover' : undefined;

  return (
    <Fragment>
      
    </Fragment>
  );
}
