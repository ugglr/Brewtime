import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import { MAIN_BG } from '../theme/colors';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
const SwitchContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`;
const ActionButton = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50px;
  ${(props) =>
    props.active
      ? `
      background-color: blue;  
        `
      : `
      background-color: white;
        `}
`;
const AuthContainer = styled.div`
  margin-top: 2.5rem;
  background-color: pink;
`;

function Auth() {
  const [onLogin, setOnLogin] = useState(true);
  return (
    <PageContainer>
      <SwitchContainer>
        <ActionButton left active={onLogin} onClick={() => setOnLogin(true)}>
          Login
        </ActionButton>
        <ActionButton right active={!onLogin} onClick={() => setOnLogin(false)}>
          Sign up
        </ActionButton>
      </SwitchContainer>
      {onLogin && <LoginForm />}
      {!onLogin && <RegisterForm />}
    </PageContainer>
  );
}

export default Auth;
