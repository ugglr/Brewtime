import React, { useState } from "react";
import styled from "styled-components";

import { Formik, Form, Field, ErrorMessage } from "formik";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  padding-top: 50px;
  width: 30rem;
  height: 30rem;
  border-radius: 50px;
  background: #e9e5e2;
  box-shadow: 20px 20px 60px #c6c3c0, -20px -20px 60px #ffffff;
`;
const SwitcherContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;
const SwitchButton = styled.div`
  height: 50px;
  width: 100px;
  cursor: pointer;
  background-color: red;
`;
const Title = styled.h2``;
const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FieldWrapper = styled.div`
  height: 55px;
  width: 100%;
  margin-bottom: 16px;
  background-color: blue;
`;
const Label = styled.p`
  margin: 0;
`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container>
      <SwitcherContainer>
        <SwitchButton onClick={() => setIsLogin(true)}>
          <Title>Login</Title>
        </SwitchButton>
        <SwitchButton onClick={() => setIsLogin(false)}>
          <Title>Sign Up</Title>
        </SwitchButton>
      </SwitcherContainer>
      {isLogin && (
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
                  <Label>Email</Label>
                  <Field type='email' name='email' />
                  <ErrorMessage name='email' component='div' />
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Password</Label>
                  <Field type='password' name='password' />
                  <ErrorMessage name='password' component='div' />
                </FieldWrapper>
              </FieldsContainer>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}

      {!isLogin && (
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
                  <Label>Your Email</Label>
                  <Field type='email' name='email' />
                  <ErrorMessage name='email' component='div' />
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Password</Label>
                  <Field type='password' name='password' />
                  <ErrorMessage name='password' component='div' />
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Retype Password</Label>
                  <Field type='password' name='passwordCheck' />
                  <ErrorMessage name='password' component='div' />
                </FieldWrapper>
              </FieldsContainer>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default Auth;
