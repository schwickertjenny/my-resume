import styled from "styled-components";
import breakpoint from "../data/breakpoints";

export const Wrapper = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  }
  @media only screen and ${breakpoint.device.sm} {
    /* smartphones, Android phones, landscape iPhone */
  }
  @media only screen and ${breakpoint.device.lg} {
    /* hi-res laptops and desktops */
    display: flex;
    div#summary-bar {
      height: 100vw;
      width: auto;
      float: left;
      background-color: rgb(44 54 68 / 55%);
      padding: 30px;
    }
    div#summary-bar {
      h2 {
        text-align: center;
        text-transform: uppercase;
      }
      p {
        max-width: 300px;
      }
      div.categories {
      }
      div.categories h3 {
        text-transform: uppercase;
        border-bottom: 1px solid;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        padding-left: 1.3em;
      }
      li:before {
        content: ">";
        display: inline-block;
        margin-left: -1.3em; /* same as padding-left set on li */
        width: 1.3em; /* same as padding-left set on li */
      }
    }
    img#profile-pic {
      width: 300px;
      border-radius: 50%;
    }
  }
`;
