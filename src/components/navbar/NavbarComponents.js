// styles/NavbarStyles.js
// components/NavbarComponents.js
import styled from "styled-components";
import { Link } from "react-router-dom"; // Usa Link de react-router-dom

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #C27D7D;
`;

export const NavLogo = styled(Link)` /* Cambia a Link para navegación interna */
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavLink = styled(Link)` /* Cambia a Link para navegación interna */
  font-size: 1.2rem; /* Agranda el tamaño de letra aquí */
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartIcon = styled.img`
  width: 30px;
  height: auto;
  margin-right: 5px;

  /* Tamaño responsivo */
  @media (min-width: 768px) {
    width: 30px;
  }
`;

