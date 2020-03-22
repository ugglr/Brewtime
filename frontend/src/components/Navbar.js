import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  margin-left: 5rem;
`;
const LinksContainer = styled.div`
  margin-right: 5rem;
`;
const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li`
  display: inline;
  padding: 8px 8px;
  font-size: 1.2rem;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Link to='/'>
          <h2>Brewtime.</h2>
        </Link>
      </LogoContainer>
      <LinksContainer>
        <UL>
          <LI>
            <Link to='/auth'>Login / Sign Up</Link>
          </LI>
        </UL>
      </LinksContainer>
    </NavContainer>
  );
};

export default Navbar;
