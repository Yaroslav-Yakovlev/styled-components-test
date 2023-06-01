import React from 'react';
import { ButtonStyled } from './styles/Button.styled';
import { ContainerStyled } from './styles/Container.styled';
import { HeaderStyled, Nav, Logo, Image } from "./styles/Header.styled";
import { FlexStyled } from "./styles/Flex.styled";


const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <ContainerStyled>
            <Nav>
                <Logo src='./images/logo.svg' alt='logo'/>
                <ButtonStyled>Try It Free</ButtonStyled>
            </Nav>
                <FlexStyled>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>

                        <ButtonStyled bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </ButtonStyled>
                    </div>
                        <Image src='./images/illustration-mockups.svg' alt=''/>
                </FlexStyled>
            </ContainerStyled>
        </HeaderStyled>
    );
};

export default Header;
