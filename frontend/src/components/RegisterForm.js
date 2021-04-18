import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from './Button';
import {
  NeoMorphicInput,
  InputContainer,
  LabelContainer,
  ErrorMsgContainer,
} from '../theme/inputs';

function RegisterForm() {
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
          errors.email = 'invalid email address';
        }
        if (!values.password) {
          errors.password = 'required';
        }
        if (!values.passwordCheck) {
          errors.passwordCheck = 'required';
        }
        if (values.passwordCheck && values.password !== values.passwordCheck) {
          errors.passwordCheck = 'passwords need to match';
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
            <LabelContainer>email of choice</LabelContainer>
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
            <LabelContainer>new password</LabelContainer>
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
          <InputContainer>
            <LabelContainer>Re-Type Password</LabelContainer>
            <Field
              type="password"
              name="passwordCheck"
              placeholder="re-type password"
              component={NeoMorphicInput}
            />
            <ErrorMessage name="passwordCheck">
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

export default RegisterForm;
