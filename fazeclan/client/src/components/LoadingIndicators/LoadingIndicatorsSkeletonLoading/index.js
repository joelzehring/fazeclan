import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Avatar,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '@material-ui/lab/Skeleton';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  media: {
    height: 190
  }
});

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          title="Ted talk"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool
};

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">Line skeleton loading</div>
            </div>
            <CardContent className="p-3">
              <Skeleton />
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">Wave animation</div>
            </div>
            <CardContent className="p-3">
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Media loading />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">Article skeleton example</div>
            </div>
            <CardContent className="p-3">
              <p>
                <Skeleton variant="circle" height={84} width={84} />
              </p>
              <p className="mb-2">
                <Skeleton variant="text" width={287} />
              </p>
              <p className="mb-2">
                <Skeleton variant="text" width={295} />
              </p>
              <p className="mb-2">
                <Skeleton variant="text" width={290} />
              </p>
              <p className="mb-2">
                <Skeleton variant="text" width={305} />
              </p>
              <p className="mb-2">
                <Skeleton variant="text" width={320} />
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
