import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

import styles from './Homepage.module.scss';
import { PostsContainer as Posts } from '../../features/Posts/Posts';
import { addPost, fetchPosts, getPosts } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

export const Homepage = ({ addPost, fetchPosts, posts }) => {
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const [newPost, setNewPost] = useState();

  const handleChangeId = (event) => {
    setNewPost({
      ...newPost,
      userId: event.target.value,
      id: '12343242423424',
    });

    console.log('newPost', newPost);
  };

  const handleChangeTitle = (event) => {
    setNewPost({
      ...newPost,
      title: event.target.value,
    });
  };

  const handleChangeBody = (event) => {
    setNewPost({
      ...newPost,
      body: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);
    console.log(newPost);
  };

  return (
    <div>
      <div className={styles.top}>
        <img
          className={styles.image}
          src={require('../../../images/main-photo.jpg')}
          alt="main"
        ></img>
        <div className={styles.gradient}></div>
        <Container className={styles.elements} fluid>
          <Row>
            <Col xs={7}>
              <h1 className={styles.slogan}>
                What is your
                <br /> business
                <br />
                plan?
              </h1>
            </Col>
            <Col xs={5}>
              <div className={styles.form}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="controlInput1">
                    <Form.Label className={styles.label}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      onChange={handleChangeId}
                      type="email"
                      placeholder="name@example.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="controlInput2">
                    <Form.Label className={styles.label}>Title</Form.Label>
                    <Form.Control
                      onChange={handleChangeTitle}
                      type="text"
                      placeholder="Your idea in 3 words"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="controlTextarea1">
                    <Form.Label className={styles.label}>
                      Example textarea
                    </Form.Label>
                    <Form.Control
                      onChange={handleChangeBody}
                      as="textarea"
                      rows={3}
                      placeholder="Describe your idea"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Posts posts={posts} />
    </div>
  );
};

Homepage.propTypes = {
  addPost: PropTypes.func,
  fetchPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPost: (newPost) => dispatch(addPost(newPost)),
});

export const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
