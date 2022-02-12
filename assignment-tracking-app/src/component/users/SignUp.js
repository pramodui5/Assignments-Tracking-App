import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../packages/Card';
import PageTitle from '../../packages/PageTitle';
// import { userInputDetails } from '../../modules/actions/actions';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
  contact: yup.number().required(),
});

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          // dispatch(userInputDetails(values));
        }}
        initialValues={{
          userName: '',
          email: '',
          password: '',
          contact: '',
          trainer: false,
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <PageTitle>User Registration</PageTitle>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" className="mb-3" controlId="validationFormikUsername">
                <Form.Label>User Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mb-3" controlId="validationFormikEmail">
                <Form.Label>E-Mail</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="test@test.in"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mb-3" controlId="validationFormikPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    aria-describedby="inputGroupPrepend"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mb-3" controlId="validationFormikContact">
                <Form.Label>Contact Number</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="number"
                    name="contact"
                    value={values.contact}
                    onChange={handleChange}
                    isInvalid={!!errors.contact}
                  />
                  <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Button type="submit">Sign up</Button>
            </Row>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUp;
