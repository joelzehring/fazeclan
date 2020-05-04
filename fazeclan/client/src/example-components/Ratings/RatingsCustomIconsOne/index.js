import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '@material-ui/icons/Favorite';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied'
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral'
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied'
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied'
  }
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

export default function LivePreviewExample() {
  return (
    <Fragment>
      <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
        Custom empty icon
      </h5>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </div>

      <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
        Alternate icon
      </h5>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <StyledRating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<FavoriteIcon fontSize="inherit" />}
        />
      </div>

      <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
        10 stars
      </h5>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <Rating name="customized-10" defaultValue={2} max={10} />
      </div>

      <h5 className="font-size-sm text-uppercase font-weight-bold text-dark mb-3 text-center mt-1">
        Custom icon set
      </h5>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={value => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </div>
    </Fragment>
  );
}
