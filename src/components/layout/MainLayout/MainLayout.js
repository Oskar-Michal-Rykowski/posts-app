import React from 'react';
import PropTypes from 'prop-types';

export const MainLayout = ({ children }) => <div>{children}</div>;

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
