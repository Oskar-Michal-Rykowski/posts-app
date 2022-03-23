import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

import styles from './Posts.module.scss';
import { connect } from 'react-redux';
import { fetchPosts, getPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  console.log(posts);
  return (
    <Container className={styles.posts}>
      <h1>Post</h1>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Header as="h5">Who: {post.userId}</Card.Header>
          <Card.Body>
            <Card.Title>What: {post.title}</Card.Title>
            <Link to={`post/${post.id}`}>FIND MORE</Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

Posts.propTypes = {
  children: PropTypes.node,
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  // posts: getPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchPosts: () => dispatch(fetchPosts()),
});

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

// export default PostsContainer;
