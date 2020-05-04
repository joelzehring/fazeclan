import React, { Fragment } from 'react';

import { Box, Popover, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);

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

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);

  return (
    <Fragment>
      <div className="text-center">
        <Button
          variant="outlined"
          color="primary"
          className="border-primary text-primary m-2"
          onClick={handleClickPopover1}>
          Primary
        </Button>
        <Popover
          classes={{ paper: 'bg-primary text-white' }}
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
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="border-success text-success m-2"
          onClick={handleClickPopover2}>
          Success
        </Button>
        <Popover
          open={open2}
          classes={{ paper: 'bg-success text-white' }}
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
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="border-danger text-danger m-2"
          onClick={handleClickPopover3}>
          Danger
        </Button>
        <Popover
          open={open3}
          classes={{ paper: 'bg-danger text-white' }}
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
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="border-first text-first m-2"
          onClick={handleClickPopover4}>
          First
        </Button>
        <Popover
          open={open4}
          classes={{ paper: 'bg-first text-white' }}
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
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="border-second text-second m-2"
          onClick={handleClickPopover5}>
          Second
        </Button>
        <Popover
          open={open5}
          anchorEl={anchorEl5}
          classes={{ paper: 'bg-second text-white' }}
          onClose={handleClosePopover5}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>
      </div>
    </Fragment>
  );
}
