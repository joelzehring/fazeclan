import React, { Fragment } from 'react';

// import {
//   Grid,
//   Fab,
//   Container,
//   InputAdornment,
//   Drawer,
//   IconButton,
//   Card,
//   CardContent,
//   Button,
//   List,
//   ListItem,
//   Tooltip,
//   TextField,
//   Divider
// } from '@material-ui/core';

// import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

// import projectLogo from '../../assets/images/react.svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Link } from 'react-router-dom';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

// import svgImage6 from '../../assets/images/illustrations/data_points.svg';

// import svgImage11 from '../../assets/images/illustrations/businesswoman.svg';

// import hero6 from '../../assets/images/hero-bg/hero-6.jpg';

// import IconsFeather from '../../components/Icons/IconsFeather';
// import IconsIon from '../../components/Icons/IconsIon';
// import IconsPe7 from '../../components/Icons/IconsPe7';
// import IconsFontawesome from '../../components/Icons/IconsFontawesome';

const LandingPage = () => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        
      </div>
    </Fragment>
  );
};

export default LandingPage;
