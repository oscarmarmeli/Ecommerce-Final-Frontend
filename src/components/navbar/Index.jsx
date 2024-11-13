// components/Navbar.js
import React from "react";
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavLink,
  CartIcon, // Importa el nuevo estilo
} from "./NavbarComponents";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo to="/">Solo Quincho</NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/carrito">
          <CartIcon src="/images/carritocompra.png" alt="Carrito" /> {/* Icono de carrito */}
          Carrito
        </NavLink>
        <NavLink to="/registro">Registro</NavLink>        
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;