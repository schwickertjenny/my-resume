import styled from "styled-components";

export const Wrapper = styled.div`
  .nav-bar {
    margin: 40px 0;
    text-align: center;
    display: block;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    /* overflow: hidden; */

    -webkit-padding-start: 0px;
    padding-left: 20px;
    white-space: nowrap;
  }
  li {
    /* float: left; */
    display: inline;
    margin: 0 40px;
  }
  a {
    /* display: block; */
    text-align: center;
    text-decoration: none;

    font-size: 2vw;
    text-transform: uppercase;
    letter-spacing: 4px;
    position: relative;
    color: red;
    opacity: 0.7;
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
  a:hover {
    opacity: 1;
  }
  a:hover::before {
    content: ">";
    position: absolute;
    left: -20px;
    font-size: 2vw;
    animation: blink 1.25s linear infinite;
  }

  @media (max-width: 830px) {
    .nav-bar {
      margin: 20px 0;
    }
    a {
      display: block;
    }
    a:hover::before {
      content: none;
      animation: none;
    }
    li {
      display: inline;
      margin: 0px;
    }
    ul {
      padding: 0px;
      white-space: none;
    }
  }

  @media (min-width:1281px) { 
        /* hi-res laptops and desktops */ 
        a {
          font-size: 30px;
        }
        a:hover::before {
          content: ">";
          position: absolute;
          left: -20px;
          font-size: 30px;
          animation: blink 1.25s linear infinite;
        }
    }
`;
