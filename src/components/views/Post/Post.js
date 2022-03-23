import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../../redux/postsRedux';
import { Card, Container } from 'react-bootstrap';
import { fetchComments, getComments } from '../../../redux/commentsRedux';
import { Link } from 'react-router-dom';

const Post = ({ posts, fetchComments, comments }) => {
  useEffect(() => {
    fetchComments();
  }, []);

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  const post = posts.find((post) => post.id == id);

  const commentsForThePost = comments.filter(
    (commentsForThePost) => commentsForThePost.postId == id
  );

  console.log('comment', commentsForThePost);

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <Container>
        <Card key={post.id}>
          <Card.Header as="h5">Who: {post.userId}</Card.Header>
          <Card.Body>
            <Card.Title>What: {post.title}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
          </Card.Body>
        </Card>
        <Container>
          <h3> Comments </h3>
          <div>
            {commentsForThePost.map((comment) => (
              <Card key={comment.id}>
                <Card.Header as="h5">Who: {comment.email}</Card.Header>
                <Card.Body>
                  <Card.Title>What: {comment.name}</Card.Title>
                  <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </Container>
    </div>
  );
};

Post.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchComments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),
});

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
