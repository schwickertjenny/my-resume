import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore

export const GlobalStyle = createGlobalStyle `
    html {
        height: 100%;
    }
    body {
        padding:0px 100px;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        height:calc(100% - 100px);

        background-color: #161b22;
        color: #fff;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;