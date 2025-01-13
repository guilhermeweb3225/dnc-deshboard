import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
export const GlobalStyle=createGlobalStyle<{Theme?:DefaultTheme}>`
body,html{
background:${(props)=>props.theme.appBackground};
color: ${(props)=>props.theme.appColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Anton", serif;
    font-weight: 400;
    font-style: normal;
}

h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
}
`