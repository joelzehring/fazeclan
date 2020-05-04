import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../components/DashboardDefault/DashboardDefaultSection4';
import DashboardDefaultSection5 from '../../components/DashboardDefault/DashboardDefaultSection5';
import DashboardDefaultSection6 from '../../components/DashboardDefault/DashboardDefaultSection6';
import DashboardDefaultSection7 from '../../components/DashboardDefault/DashboardDefaultSection7';
import DashboardDefaultSection8 from '../../components/DashboardDefault/DashboardDefaultSection8';
export default function Dashboard() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dashboard"
        titleDescription="User Dashboard."
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
