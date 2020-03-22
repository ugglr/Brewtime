import React from "react";
import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CallToActionText = styled.p``;
const FormsWrapper = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  padding: 5px;
  font-size: 2rem;
`;

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
      <FormsWrapper>
        <StyledInput
          ref={node => (email = node)}
          type='email'
          placeholder='Email Subscribe! '
        />
        <Button primary onClick={submit}>
          Submit
        </Button>
      </FormsWrapper>

      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </Container>
  );
};

export default SubscribeForm;
