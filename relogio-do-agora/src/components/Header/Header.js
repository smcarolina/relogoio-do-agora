import React from "react";
import { HeaderContainer, Link, Logo, Nav } from "./style";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import LogoImg from '../../assets/img/LogoImg.jpeg'

const Header = () => {
    return <HeaderContainer>
        <Logo src={LogoImg}/>

    <Nav>
            
        {/* <AnchorLink href="#home">Início</AnchorLink> */}
        <Link href="#home">Início</Link>
        <Link href="#quem-somos">Quem somos</Link>
        <Link href="#ranking">Ranking</Link>
        <Link href="#sugestoes">Mude o relógio</Link>
    
    </Nav>
    </HeaderContainer>
}

export default Header;