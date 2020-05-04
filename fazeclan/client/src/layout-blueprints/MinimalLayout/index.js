import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const MinimalLayout = props => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};

MinimalLayout.propTypes = {
  children: PropTypes.node
};

export default MinimalLayout;
