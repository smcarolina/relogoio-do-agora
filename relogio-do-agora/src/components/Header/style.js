import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 100%;
  /* margin-left: 20px; */
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 10px;
  color: #000;
`;
