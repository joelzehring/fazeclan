import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, IconButton, Box, Card } from '@material-ui/core';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart26Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    colors: ['#f4772e'],
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart26Data = [
    {
      name: 'Daily visitors',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart27Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#f83245',
      curve: 'smooth',
      width: 3
    },
    colors: ['#f83245'],
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart27Data = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38, 47, 24, 65]
    }
  ];

  const chart28Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#f83245',
      curve: 'smooth',
      width: 3
    },
    colors: ['#1bc943'],
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart28Data = [
    {
      name: 'Sales',
      data: [45, 56, 24, 54, 38, 47, 38, 56, 24, 38, 56, 47, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="#/"
            onClick={e => e.preventDefault()}
            className="card mb-4 card-box card-box-border-bottom border-warning">
            <div className="card-badges">
              <span className="text-info shadow-none badge badge-neutral-info badge-pill">
                NEW
              </span>
            </div>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-warning"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg text-black pr-2">2,345</b>
                    <span className="text-black-50">users</span>
                  </div>
                  <div className="mt-2 pt-3 pr-3">
                    <Chart
                      options={chart26Options}
                      series={chart26Data}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
                <div className="ml-auto card-hover-indicator">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-right']}
                    className="font-size-xl"
                  />
                </div>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-box mb-4 card-box-border-bottom border-danger">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="font-size-xl text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-danger"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg pr-2">$9,693</b>
                    <span className="text-black-50">revenue</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chart27Options}
                      series={chart27Data}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-box-alt mb-4 card-border-top border-success">
            <Box className="card-tr-actions card-tr-actions-sm">
              <IconButton color="primary" className="font-size-xl text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </IconButton>
            </Box>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg pr-2">489</b>
                    <span className="text-black-50">users</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chart28Options}
                      series={chart28Data}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
