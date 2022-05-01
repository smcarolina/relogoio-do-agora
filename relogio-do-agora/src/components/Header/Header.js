import React from "react";
import { HeaderContainer, Link, Logo, Nav } from "./style";
import LogoImg from '../../assets/img/LogoImg.jpeg'

const Header = () => {
    return <HeaderContainer>
        <Logo src={LogoImg}/>

    <Nav>
            
        <Link href="">Início</Link>
        <Link href="">Quem somos</Link>
        <Link href="">Ranking</Link>
        <Link href="">Mude o relógio</Link>
    
    </Nav>
    </HeaderContainer>
}

export default Header;