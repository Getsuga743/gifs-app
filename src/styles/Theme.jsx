
import React from 'react'
import { ThemeProvider, Global, css, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { theme } from './Themes/theme'

const GlobalStyles = () => {
    const theme = useTheme();
    return (
        <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
    ${emotionNormalize};
    *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    };
     *{
        box-sizing: border-box;
        margin:0;
    };
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    };
    body{
        font-family:${theme.fonts.main};
        font-size: 1.6rem;
        background:${theme.colors.background1};
        color: ${theme.colors.primary1};
        cursor:default;
    };
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${theme.fonts.title};
    }
    a {
        text-decoration: none;
    };
    li{
        list-style: none;
    };
`} />
    )
}




export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);