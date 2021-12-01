import styled from "styled-components";
import breakpoint from "../data/breakpoints";

export const Wrapper = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    background-color: rgba(66, 22, 28, 1);
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    /* smartphones, Android phones, landscape iPhone */
  }
  @media only screen and ${breakpoint.device.lg} {
    /* hi-res laptops and desktops */
    display: block;
    position: fixed;
    right: 0;
    top: calc(50% + 20px);
    width: auto;
    margin-top: -8em;
    text-align: center;

    ul {
      padding: 0 25px;
    }

    li {
      list-style-type: none;
      /* margin: 30px 0; */
    }

    li a,
    li svg {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 30px;
    }

    ul li a:visited {
      color: #fff;
      text-decoration: none;
    }
  }
`;
