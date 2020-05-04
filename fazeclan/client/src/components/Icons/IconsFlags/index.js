import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

import { FlagIcon } from 'react-flag-kit';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <FlagIcon code="CA" size={60} />
        </Card>
        <Card className="p-2 text-success">
          <FlagIcon code="US" size={60} />
        </Card>
        <Card className="p-2 text-warning">
          <FlagIcon code="DM" size={60} />
        </Card>
        <Card className="p-2 text-danger">
          <FlagIcon code="GB" size={60} />
        </Card>
        <Card className="p-2 text-dark">
          <FlagIcon code="DE" size={60} />
        </Card>
        <Card className="p-2 text-info">
          <FlagIcon code="FR" size={60} />
        </Card>
        <Card className="p-2 text-first">
          <FlagIcon code="IT" size={60} />
        </Card>
        <Card className="p-2 text-second">
          <FlagIcon code="AT" size={60} />
        </Card>
        <Card className="p-2">
          <FlagIcon code="BE" size={60} />
        </Card>
        <Card className="p-2">
          <FlagIcon code="CH" size={60} />
        </Card>
        <Card className="p-2">
          <FlagIcon code="RO" size={60} />
        </Card>
        <Card className="p-2">
          <FlagIcon code="RU" size={60} />
        </Card>
      </div>
    </Fragment>
  );
}
