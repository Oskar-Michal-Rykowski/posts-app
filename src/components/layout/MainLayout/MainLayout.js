import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../redux/postsRedux';

export const MainLayout = ({ children, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>{children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  // posts: getPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
