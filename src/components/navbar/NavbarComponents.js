// styles/NavbarStyles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: #C27D7D;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;