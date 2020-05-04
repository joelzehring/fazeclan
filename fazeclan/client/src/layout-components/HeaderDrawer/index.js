import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Hidden,
  Drawer,
  IconButton,
  Box,
  Checkbox,
  Badge,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

import ListIcon from '@material-ui/icons/List';

import Circle from 'react-circle';
import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

function HeaderDrawer() {
  const chart36Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 4
    },
    colors: ['#1bc943'],
    fill: {
      color: '1bc943',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart36Data = [
    {
      name: 'Monthly Analytics',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];

  const [open, setOpen] = React.useState(false);

  function handleDrawerClose() {
    setOpen(true);
  }

  function handleDrawerOpen() {
    setOpen(false);
  }

  return (
    <Fragment>
    </Fragment>
  );
}

export default HeaderDrawer;
