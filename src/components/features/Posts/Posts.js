import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

import styles from './Posts.module.scss';
import { connect } from 'react-redux';
import { fetchPosts, getPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const reversePosts = posts.reverse();
  return (
    <Container className={styles.posts}>
      <h1>Post</h1>
      <div className={styles.list}>
        {reversePosts.map((post) => (
          <Card className={styles.card} key={post.id}>
            <Card.Header className={styles.header} as="h5">
              Who: {post.userId}
            </Card.Header>
            <Card.Body>
              <Card.Title>What: {post.title}</Card.Title>
              <Link className={styles.link} to={`post/${post.id}`}>
                FIND MORE
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

Posts.propTypes = {
  children: PropTypes.node,
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
