import styled from "styled-components";
import breakpoint from "../data/breakpoints";

export const Wrapper = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    width: auto;
    display: flex;
    height: 100vh;

    .context-box {
      margin: auto 40px;
      text-align: center;
      padding: 50px;
      background-color: rgb(44 54 68 / 55%);
      border-radius: 20px 20px 20px 20px;
    }

    img#profile-pic {
      border-radius: 50%;
      /* border: 15px solid #161b22; */
      width: 40%;
      max-width: 400px;
      box-shadow: 10px 10px 20px #00000054;
    }
    h1 {
      font-size: 5vw;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    p {
      font-size: 2vw;
      letter-spacing: 2px;
      text-align: left;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    /* smartphones, Android phones, landscape iPhone */
  }
  @media only screen and ${breakpoint.device.lg} {
    /* hi-res laptops and desktops */

    .context-box {
      margin: auto;
      padding: 50px;
      border-radius: 0 20px 20px 0;
    }

    margin-right: 120px;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
      padding: 0 200px;
    }
  }
`;
