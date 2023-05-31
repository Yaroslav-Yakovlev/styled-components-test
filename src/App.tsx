import React from 'react';
import {DefaultTheme, ThemeProvider} from "styled-components";
import {ContainerStyled} from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";


export const theme: DefaultTheme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    }
}

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Header/>
                <ContainerStyled>
                    <h1>Hello</h1>
                </ContainerStyled>
            </>
        </ThemeProvider>
    );
}

export default App;
