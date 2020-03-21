import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: red;
`;
const Title = styled.h1``;
const Title2 = styled.h1``;
const Subtitle = styled.h3``;

const Header = props => {
  return (
    <HeaderContainer>
      <Title>{props.title}</Title>
      <Title2>{props.title2}</Title2>
      <Subtitle>{props.subtitle}</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
