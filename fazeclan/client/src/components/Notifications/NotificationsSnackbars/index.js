import React, { Fragment } from 'react';

import { IconButton, Button } from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

export default function LivePreviewExample() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Fragment>
      <div className="text-center">
        <Button
          className="m-2"
          size="large"
          color="primary"
          variant="contained"
          onClick={handleClick}>
          Top Centered Snackbar
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={
            <React.Fragment>
              <Button color="primary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </Fragment>
  );
}
