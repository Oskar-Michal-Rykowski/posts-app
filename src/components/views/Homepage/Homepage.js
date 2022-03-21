import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Row } from 'react-bootstrap';

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
      <Container className={styles.elements}>
        <Row>
          <Col>
            <h1 className={styles.slogan}>
              What is your
              <br /> business
              <br />
              plan?
            </h1>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Homepage.propTypes = {
  children: PropTypes.node,
};
