import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BLACK } from "./Theme/colors";

const NavContainer = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  margin-left: 4rem;
`;
const LinksContainer = styled.div`
  margin-right: 4rem;
`;
const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li`
  display: inline;
  padding: 8px 16px;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${BLACK};

  &:hover {
    color: white;
  }
`;

const Navbar = props => {
  return (
    <NavContainer>
      <LogoContainer>
        <StyledLink to='/'>
          <h2>Brewtime.</h2>
        </StyledLink>
      </LogoContainer>
      {props.showLinks && (
        <LinksContainer>
          <UL>
            <LI>
              <StyledLink to='/'>Home</StyledLink>
            </LI>
            <LI>
              <StyledLink to='/auth'>Login/Sign Up</StyledLink>
            </LI>
          </UL>
        </LinksContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;
