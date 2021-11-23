import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  ul {
    list-style: none;
    -webkit-padding-start: 0px;
    padding-left: 20px;
    white-space: nowrap;
  }
  ul:first-child,
  li:first-child,
  a:first-child {
    padding-left: 0px;
    margin-left: 0px;
  }
  li {
    display: inline;
    margin: 20px;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: red;
    margin: 0 20px;
    position: relative;
    opacity: 0.7;

    font-size: 2vw;
    letter-spacing: 4px;
  }

  a.blink {
    opacity: 1;
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
`;
