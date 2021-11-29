import { createGlobalStyle } from "styled-components";
// Images
import wallPaper from "../images/wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        padding:0px 100px;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height:calc(100% - 100px);

        color: #fff;
        background-color: #161b22;
        
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
    @media (min-width:320px)  { 
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        body {
        }
    }
    @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
    @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
    @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
    @media (min-width:1281px) { 
        /* hi-res laptops and desktops */ 
        body {
        }
    }
`;
