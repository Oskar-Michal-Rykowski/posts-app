import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

import styles from './Homepage.module.scss';

export const Homepage = () => {
  return (
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
              <Form>
                <Form.Group className="mb-3" controlId="controlInput1">
                  <Form.Label className={styles.label}>
                    Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="controlInput2">
                  <Form.Label className={styles.label}>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your idea in 3 words"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="controlTextarea1">
                  <Form.Label className={styles.label}>
                    Example textarea
                  </Form.Label>
                  <Form.Control
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
  );
};

Homepage.propTypes = {
  children: PropTypes.node,
};
