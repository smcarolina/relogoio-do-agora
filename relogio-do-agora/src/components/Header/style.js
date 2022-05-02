import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 0px;
  background-color: white;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 8vh;
  /* margin-left: 20px; */
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 4rem;
  font-family: "Cardo";
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 10px;
  color: #000;
`;
