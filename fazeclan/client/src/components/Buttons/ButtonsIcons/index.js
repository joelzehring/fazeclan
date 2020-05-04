import React, { Fragment } from 'react';

import { Grid, Fab, IconButton, Divider } from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <IconButton aria-label="delete" className="m-2" size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" className="m-2">
            <AddCircleTwoToneIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className="m-2">
            <AddCircleTwoToneIcon />
          </IconButton>
          <IconButton aria-label="delete" className="m-2">
            <AddCircleTwoToneIcon fontSize="large" />
          </IconButton>

          <Divider className="my-3" />

          <Fab color="primary" aria-label="add" className="m-2">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" className="m-2">
            <EditIcon />
          </Fab>
          <Fab variant="extended" className="m-2">
            <NavigationIcon />
            Navigate
          </Fab>
          <Fab disabled aria-label="like" className="m-2">
            <FavoriteIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Fab size="small" color="secondary" aria-label="add" className="m-2">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" aria-label="add" className="m-2">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="add" className="m-2">
            <AddIcon />
          </Fab>

          <Divider className="my-3" />

          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className="m-2">
            <NavigationIcon />
            Extended
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            className="m-2">
            <NavigationIcon />
            Extended
          </Fab>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className="m-2">
            <NavigationIcon />
            Extended
          </Fab>
        </Grid>
      </Grid>
    </Fragment>
  );
}
