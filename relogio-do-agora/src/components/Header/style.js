import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    position: absolute;
    width: 100%;
    height: 75px;
    left: 0px;
    top: 0px;
    padding-left: 20px;
`

export const Logo = styled.img`
    height: 100%;
    /* margin-left: 20px; */
`

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Link = styled.a`
    text-decoration: none;
    margin: 10px;
    color: #000;
     
`