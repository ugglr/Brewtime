import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from './Button';
import {
  NeoMorphicInput,
  InputContainer,
  LabelContainer,
  ErrorMsgContainer,
} from '../theme/inputs';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
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
          <InputContainer>
            <LabelContainer>email</LabelContainer>
            <Field
              type="email"
              name="email"
              placeholder="john.doe@email.com"
              component={NeoMorphicInput}
            />
            <ErrorMessage name="email">
              {(msg) => <ErrorMsgContainer>{msg}</ErrorMsgContainer>}
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <LabelContainer>password</LabelContainer>
            <Field
              type="password"
              name="password"
              placeholder="Password123"
              component={NeoMorphicInput}
            />
            <ErrorMessage name="password">
              {(msg) => <ErrorMsgContainer>{msg}</ErrorMsgContainer>}
            </ErrorMessage>
          </InputContainer>

          <Button
            style={{ marginTop: '16px' }}
            type="submit"
            disabled={isSubmitting}
            onClick={() => console.log('button clicked')}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
