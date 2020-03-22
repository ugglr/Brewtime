import React from "react";
import styled from "styled-components";

import { BLACK } from "./Theme/colors";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  background-color: ${BLACK};
  color: white;
`;
const NameContainer = styled.div`
  margin-left: 5rem;
`;
const CopyContainer = styled.div`
  margin-right: 5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NameContainer>
        <h3>Brewtime</h3>
      </NameContainer>
      <CopyContainer>
        <p>
          Made by{" "}
          <a
            href='https://www.github.com/ugglr'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ugglr
          </a>
          , 2020 Copyright
        </p>
      </CopyContainer>
    </FooterContainer>
  );
};

export default Footer;
