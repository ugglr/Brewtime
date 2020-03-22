import React from "react";
import styled from "styled-components";

import { MAIN_BG, BLACK } from "./Theme/colors";

const HeaderContainer = styled.div`
  height: 50vh;
  padding: 1.2em 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.div``;
const Title = styled.h1`
  color: ${BLACK};
  font-size: 7rem;
  margin-bottom: 0px;
`;
const Title2 = styled.h1`
  color: ${BLACK};
  font-size: 4rem;
`;
const Subtitle = styled.h2`
  color: ${BLACK};
  font-size: 2rem;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>{props.title}</Title>
        <Title2>{props.title2}</Title2>
        <Subtitle>{props.subtitle}</Subtitle>
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
