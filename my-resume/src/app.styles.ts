import { createGlobalStyle } from "styled-components";
import breakpoint from "./data/breakpoints";


export const GlobalStyle = createGlobalStyle`
    #root {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    @media only screen and ${breakpoint.device.xs} {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    body {
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0;

        color: #fff;
        background-color: rgb(13 17 23 / 100%);
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
    }
    @media only screen and ${breakpoint.device.sm} {
        /* smartphones, Android phones, landscape iPhone */
    }
    @media only screen and ${breakpoint.device.lg} {
        /* hi-res laptops and desktops */
        
    }
`;
