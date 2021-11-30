import { createGlobalStyle } from "styled-components";
// Images
import wallPaper from "../images/wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        // height: 100%;
    }
    #root {
        width: 100%;
        height: 100vh;
    }
    body {
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        // align-items: center;
        // height:calc(100% - 100px);
        margin: 0;

        color: #fff;
        background-color: #0d1117;
        
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
    
    .pad-left-100{
        // padding:0px 100px;
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
