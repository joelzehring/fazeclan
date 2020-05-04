import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import { ExampleWrapperSimple } from '../../layout-components';

import ButtonsBasic from '../../components/Buttons/ButtonsBasic';
import ButtonsGroups from '../../components/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../components/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../components/Buttons/ButtonsColors';
import ButtonsLinks from '../../components/Buttons/ButtonsLinks';
import ButtonsOutline from '../../components/Buttons/ButtonsOutline';
import ButtonsSizing from '../../components/Buttons/ButtonsSizing';
import ButtonsGradients from '../../components/Buttons/ButtonsGradients';
import ButtonsLoading from '../../components/Buttons/ButtonsLoading';
import ButtonsSocial from '../../components/Buttons/ButtonsSocial';
import ButtonsIcons from '../../components/Buttons/ButtonsIcons';
export default function Buttons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Buttons"
        titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Basic">
            <ButtonsBasic />
            <div className="divider my-2" />
            <ButtonsSizing />
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExampleWrapperSimple sectionHeading="Button groups">
            <div className="text-center">
              <ButtonsGroups />
              <div className="divider my-2" />
              <ButtonsGroupsSizing />
            </div>
          </ExampleWrapperSimple>
        </Grid>
        <Grid item xs={12}>
          <ExampleWrapperSimple sectionHeading="Colors">
            <ButtonsColors />
          </ExampleWrapperSimple>
        </Grid>
      </Grid>

      <ExampleWrapperSimple sectionHeading="Gradients">
        <ButtonsGradients />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="With icons">
        <ButtonsIcons />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Social buttons">
        <ButtonsSocial />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Links">
        <ButtonsLinks />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Loading buttons">
        <ButtonsLoading />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Outline">
        <ButtonsOutline />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
