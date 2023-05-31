import React, {FC} from 'react';
import { ButtonStyled } from './styles/Button.styled';
import { ContainerStyled } from './styles/Container.styled';
import {HeaderStyled, Nav, Logo} from "./styles/Header.styled";


const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <ContainerStyled>
            <Nav>
                <Logo src='./images/logo.svg' alt=''/>
                <ButtonStyled>Try It Free</ButtonStyled>
            </Nav>
            </ContainerStyled>
        </HeaderStyled>
    );
};

export default Header;
