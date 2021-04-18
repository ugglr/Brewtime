import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from './Button';
import {
  NeoMorphicInput,
  InputContainer,
  LabelContainer,
  ErrorMsgContainer,
} from '../theme/inputs';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      authToken
    }
  }
`;

function LoginForm() {
  const [login, { data }] = useMutation(LOGIN);

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
        console.log('form values: ', values);
        login({
          variables: { email: values.email, password: values.password },
        });
        console.log(data);
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
            onClick={() => console.log('Login submitted! 🚀')}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
