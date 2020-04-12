import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  width: 30rem;
  height: 30rem;
  border-color: black;
  border-width: 1px;
  border-style: solid;
`;

const Auth = () => {
  return (
    <Container>
      <h1>Auth</h1>
    </Container>
  );
};

export default Auth;
