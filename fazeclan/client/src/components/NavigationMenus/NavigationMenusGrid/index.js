import React, { Fragment } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

import IosBoat from 'react-ionicons/lib/IosBoat';
import IosChatboxes from 'react-ionicons/lib/IosChatboxes';
import IosFunnel from 'react-ionicons/lib/IosFunnel';
import IosMedal from 'react-ionicons/lib/IosMedal';
import IosSpeedometer from 'react-ionicons/lib/IosSpeedometer';
import IosSunny from 'react-ionicons/lib/IosSunny';
import IosFlame from 'react-ionicons/lib/IosFlame';
import IosImages from 'react-ionicons/lib/IosImages';
import IosPeople from 'react-ionicons/lib/IosPeople';
import IosFootball from 'react-ionicons/lib/IosFootball';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <div className="heading-3 text-center">Three columns example</div>
          <Card className="card-box mb-3 mx-3">
            <div className="grid-menu grid-menu-3col">
              <Grid container spacing={0}>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosBoat fontSize="28px" color="var(--primary)" />
                    </span>
                    <span>Primary</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosChatboxes fontSize="28px" color="var(--first)" />
                    </span>
                    <span>First</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosFunnel
                        className
                        fontSize="28px"
                        color="var(--success)"
                      />
                    </span>
                    <span>Success</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosMedal fontSize="28px" color="var(--info)" />
                    </span>
                    <span>Info</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosSpeedometer fontSize="28px" color="var(--warning)" />
                    </span>
                    <span>Warning</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xl={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosSunny fontSize="28px" color="var(--danger)" />
                    </span>
                    <span>Danger</span>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="heading-3 text-center">Two columns example</div>
          <Card className="card-box mb-3 mx-3">
            <div className="grid-menu grid-menu-2col">
              <Grid container spacing={0}>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosFlame fontSize="28px" color="var(--primary)" />
                    </span>
                    <span>Primary</span>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosImages fontSize="28px" color="var(--info)" />
                    </span>
                    <span>Info</span>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosPeople fontSize="28px" color="var(--success)" />
                    </span>
                    <span>Success</span>
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="d-block border-0 w-100">
                    <span className="font-size-xxl d-block mb-2">
                      <IosFootball fontSize="28px" color="var(--danger)" />
                    </span>
                    <span>Danger</span>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
