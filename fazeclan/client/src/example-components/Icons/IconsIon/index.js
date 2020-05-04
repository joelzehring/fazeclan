import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

import IosHeart from 'react-ionicons/lib/IosHeart';
import MdHeart from 'react-ionicons/lib/MdHeart';
import IosAlarm from 'react-ionicons/lib/IosAlarm';
import MdAlarm from 'react-ionicons/lib/MdAlarm';
import IosCog from 'react-ionicons/lib/IosCog';
import MdCog from 'react-ionicons/lib/MdCog';
import IosFootball from 'react-ionicons/lib/IosFootball';
import MdFootball from 'react-ionicons/lib/MdFootball';
import IosOptions from 'react-ionicons/lib/IosOptions';
import MdOptions from 'react-ionicons/lib/MdOptions';
import IosUmbrella from 'react-ionicons/lib/IosUmbrella';
import MdUmbrella from 'react-ionicons/lib/MdUmbrella';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <IosHeart fontSize="28px" color="var(--success)" />
        </Card>
        <Card className="p-2 text-success">
          <MdHeart fontSize="28px" color="var(--info)" />
        </Card>
        <Card className="p-2 text-warning">
          <IosAlarm fontSize="28px" color="var(--danger)" />
        </Card>
        <Card className="p-2 text-danger">
          <MdAlarm fontSize="28px" color="var(--warning)" />
        </Card>
        <Card className="p-2 text-dark">
          <IosCog fontSize="28px" color="var(--first)" />
        </Card>
        <Card className="p-2 text-info">
          <MdCog fontSize="28px" color="var(--second)" />
        </Card>
        <Card className="p-2 text-first">
          <IosFootball fontSize="28px" color="var(--primary)" />
        </Card>
        <Card className="p-2 text-second">
          <MdFootball fontSize="28px" color="var(--success)" />
        </Card>
        <Card className="p-2">
          <IosOptions fontSize="28px" color="var(--danger)" />
        </Card>
        <Card className="p-2">
          <MdOptions fontSize="28px" color="var(--warning)" />
        </Card>
        <Card className="p-2">
          <IosUmbrella fontSize="28px" color="var(--primary)" />
        </Card>
        <Card className="p-2">
          <MdUmbrella fontSize="28px" color="var(--dark)" />
        </Card>
      </div>
    </Fragment>
  );
}
