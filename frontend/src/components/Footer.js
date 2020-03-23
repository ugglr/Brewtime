import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BLACK, FERN_GREEN, MAIN_BG } from "./Theme/colors";

const FooterContainer = styled.footer`
  padding: 0.75rem 0rem;
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
const StyledLink = styled(Link)`
  font-size: 2.3rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;
const CopyContainer = styled.div`
  margin-right: 5rem;
`;
const LinkText = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  color: ${FERN_GREEN};

  &:hover {
    color: ${MAIN_BG};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NameContainer>
        <StyledLink>Brewtime.</StyledLink>
      </NameContainer>
      <CopyContainer>
        <p>
          Made by{" "}
          <LinkText
            href='https://www.github.com/ugglr'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ugglr
          </LinkText>
          , 2020 Copyright
        </p>
      </CopyContainer>
    </FooterContainer>
  );
};

export default Footer;
