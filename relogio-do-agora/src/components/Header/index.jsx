import React from "react";
import LogoImg from "../../assets/img/LogoImg.jpeg";
import * as StyledComponent from "./style";

const links = [
  {
    href: "#home",
    text: "Início",
  },
  {
    href: "#quem-somos",
    text: "Quem somos",
  },
  {
    href: "#ranking",
    text: "Ranking",
  },
  {
    href: "#sugestoes",
    text: "Mude o relógio",
  },
];

const Header = () => {
  return (
    <StyledComponent.HeaderContainer>
      <StyledComponent.Logo src={LogoImg} />
      <StyledComponent.Nav>
        {links.map((link, index) => (
          <StyledComponent.Link href={link.href} key={index}>
            {link.text}
          </StyledComponent.Link>
        ))}
      </StyledComponent.Nav>
    </StyledComponent.HeaderContainer>
  );
};

export default Header;
