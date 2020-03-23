import React from "react";
import styled from "styled-components";

import Button from "./Button";

import { FERN_GREEN } from "./Theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CallToActionText = styled.p`
  font-size: 1.3rem;
`;
const InputContainer = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  padding: 8px;
  font-size: 1.8rem;
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
          placeholder='Email Subscribe! '
        />
        <Button primary onClick={submit}>
          Submit
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
