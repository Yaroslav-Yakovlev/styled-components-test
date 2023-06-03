import React from 'react';
import {DefaultTheme, ThemeProvider} from "styled-components";
import {ContainerStyled} from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import content from "./content";
import Card from "./components/Card";
import Footer from './components/Footer';

export const theme: DefaultTheme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Header/>
                <ContainerStyled>
                    {content.map((item, index) => (
                        <Card key={index} item={item}/>
                    ))}
                </ContainerStyled>
                <Footer/>
            </>
        </ThemeProvider>
    );
}

export default App;
