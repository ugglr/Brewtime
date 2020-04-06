import React from "react";
import styled from "styled-components";

import Button from "./Button";

import { MAIN_BG, FERN_GREEN, BLACK } from "./Theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CallToActionText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
`;
const InputContainer = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  height: 45px;
  width: 400px;
  border-radius: 12px;
  padding: 12px;
  font-size: 1.5rem;
  background-color: white;
  border-style: none;

  ::placeholder {
    color: ${BLACK};
  }
`;
const ErrorContainer = styled.div``;

const SubscribeForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <Container>
      <CallToActionText>
        If you are interested in this project please subscribe for major
        announcements!
      </CallToActionText>
      <InputContainer>
        <StyledInput
          ref={node => (email = node)}
          type='email'
          placeholder='Enter Email'
        />
        <Button primary onClick={submit}>
          Subscribe!
        </Button>
      </InputContainer>

      <ErrorContainer>
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: FERN_GREEN }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </ErrorContainer>
    </Container>
  );
};

export default SubscribeForm;
