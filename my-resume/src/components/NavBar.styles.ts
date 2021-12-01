import styled from "styled-components";
import breakpoint from "../data/breakpoints";

export const Wrapper = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    display: none;
    width: auto;
    margin: 0;
    background-color: #161b22;
    box-shadow: 1px -1px 22px #000000;

    ul {
      list-style-type: none;
    }
    li {
      margin: 30px 0;
    }
    li#cv {
      margin-top: 50px;
      a {
        text-align: center;

        /* display: inline-block; */
        border-radius: 10px;
        /* border: 2px solid; */
        background-color: rgba(66, 22, 28, 1);
        padding: 10px 30px;
        letter-spacing: 0px;
        width: auto;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        cursor: pointer;
      }

      a:hover::before {
        content: none;
        animation: none;
      }
    }
    nav {
      margin: auto;
    }
    a {
      text-decoration: none;

      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 4px;
      position: relative;
      color: white;

      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    /* smartphones, Android phones, landscape iPhone */
    
  }
  @media only screen and ${breakpoint.device.lg} {
    /* hi-res laptops and desktops */
    display: flex;
    height: 100%;
    float: left;
    padding: 20px 50px 20px 0;

    a {
      font-size: 20px;
    }

    // *--- Menu hover effect ---*
    a:hover {
      opacity: 1;
      color: rgba(255, 0, 0, 0.4);
    }
    a:hover::before {
      content: ">";
      position: absolute;
      left: -15px;
      font-size: 20px;
      animation: blink 1.25s linear infinite;
    }
    @keyframes blink {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
  }
`;
