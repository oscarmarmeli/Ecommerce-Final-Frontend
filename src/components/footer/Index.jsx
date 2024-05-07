// components/Footer.js
import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterLinks,
  FooterLink,
  SocialIcon,
} from "./FooterComponents"; // Asegúrate de importar SocialIcon desde tu archivo FooterComponents si existe

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>Solo Quincho</FooterLogo>
      <FooterLinks>
        <FooterLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src="../../images/Twitter.png" alt="Twitter" />
        </FooterLink>
        <FooterLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src="../../images/Facebook.png" alt="Facebook" />
        </FooterLink>
        <FooterLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src="../../images/Instagram.png" alt="Instagram" />
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
