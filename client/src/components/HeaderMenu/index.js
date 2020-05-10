import React, { Fragment } from 'react';


const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'mega-menu-popover' : undefined;

  const [anchorElMenu, setAnchorElMenu] = React.useState(null);

  const handleClickMenu = event => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  return (
    <Fragment>
      <div className="app-header-menu">
        
        
      </div>
    </Fragment>
  );
};

export default HeaderMenu;
