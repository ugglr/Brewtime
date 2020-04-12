import React from "react";
import styled from "styled-components";

import { Formik, Form, Field, ErrorMessage } from "formik";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
  width: 30rem;
  height: 30rem;
  border-radius: 50px;
  background: #e9e5e2;
  box-shadow: 20px 20px 60px #c6c3c0, -20px -20px 60px #ffffff;
`;
const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`;
const FieldWrapper = styled.div`
  height: 50px;
  background-color: blue;
`;

const Auth = () => {
  return (
    <Container>
      <h1>Auth</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FieldsContainer>
              <FieldWrapper>
                <Field type='email' name='email' />
                <ErrorMessage name='email' component='div' />
              </FieldWrapper>
              <FieldWrapper>
                <Field type='password' name='password' />
                <ErrorMessage name='password' component='div' />
              </FieldWrapper>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </FieldsContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Auth;
