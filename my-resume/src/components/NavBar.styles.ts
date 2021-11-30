import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  height: 100%;
  float: left;
  padding: 20px 50px 20px 0;
  display: flex;
  margin: 0;
  background-color: rgba(255, 0, 0, 0.1);

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
      padding: 10px;

      /* display: inline-block; */
      border-radius: 10px;
      border: 2px solid;
      padding: 10px;
      width: auto;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      cursor: pointer;
      /* margin: 5px; */
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
    color: rgba(255, 0, 0, 0.4);
    // border-bottom: 4px solid red;
  }
  a:hover::before {
    content: ">";
    position: absolute;
    left: -15px;
    font-size: 20px;
    animation: blink 1.25s linear infinite;
  }

  @media (max-width: 830px) {
    .nav-bar {
      margin: 20px 0;
      top: 10%;
    }
    a {
      display: block;
      font-size: 20px;
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
      font-size: 20px;
    }
  }

  @media (min-width: 320px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    body {
    }
  }
  @media (min-width: 480px) {
    /* smartphones, Android phones, landscape iPhone */
  }
  @media (min-width: 600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  }
  @media (min-width: 801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    a {
      font-size: 20px;
    }
    a:hover::before {
      content: ">";
      position: absolute;
      left: -15px;
      font-size: 20px;
      animation: blink 1.25s linear infinite;
    }
  }
`;
