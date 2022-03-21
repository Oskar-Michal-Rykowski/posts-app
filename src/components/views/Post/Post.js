import React from 'react';
import PropTypes from 'prop-types';

export const Post = () => <h1>Post</h1>;

Post.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
