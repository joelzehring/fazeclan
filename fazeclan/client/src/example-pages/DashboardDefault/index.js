import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import DashboardDefaultSection5 from '../../example-components/DashboardDefault/DashboardDefaultSection5';
import DashboardDefaultSection6 from '../../example-components/DashboardDefault/DashboardDefaultSection6';
import DashboardDefaultSection7 from '../../example-components/DashboardDefault/DashboardDefaultSection7';
import DashboardDefaultSection8 from '../../example-components/DashboardDefault/DashboardDefaultSection8';
export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Default"
        titleDescription="This is a dashboard page example built using this template."
      />

      <DashboardDefaultSection1 />
      <DashboardDefaultSection2 />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection4 />
      <DashboardDefaultSection5 />
      <DashboardDefaultSection6 />
      <DashboardDefaultSection7 />
      <DashboardDefaultSection8 />
    </Fragment>
  );
}
