import React, { Fragment, useRef, useState } from 'react';

import {
  ClickAwayListener,
  InputBase,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const HeaderSearch = () => {
  const searchRef = useRef(null);

  const dummySearches = [
    'Analytics',
    'Sales',
    'Buttons',
    'Cards',
    'Helpdesk',
    'Projects',
    'Statistics'
  ];

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Fragment>
      <div className="app-search-wrapper" ref={searchRef}>
        <SearchIcon className="app-search-icon" />
        <InputBase
          placeholder="Search…"
          classes={{
            root: 'app-search-icon',
            input: 'app-search-input'
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchChange}
          value={searchValue}
        />
      </div>
      <Popper
        anchorEl={searchRef.current}
        className="app-search-popper"
        open={openSearchPopover}
        transition>
        <ClickAwayListener onClickAway={handleSearchPopverClose}>
          <Paper className="app-search-popper-content" elevation={6}>
            <div className="dropdown-menu-lg">
              <List>
                {dummySearches.map(search => (
                  <ListItem
                    button
                    key={search}
                    onClick={handleSearchPopverClose}>
                    <ListItemIcon className="pr-3 min-w-auto">
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={search} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Fragment>
  );
};

export default HeaderSearch;
