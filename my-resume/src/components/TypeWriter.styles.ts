import styled from "styled-components";

/* Credit: https://codepen.io/jenlky/pen/dKoQrW */
export const TypeWriter = styled.div`
  .css-typing p {
    border-right: 0.15em solid red;
    font-family: "Courier";
    font-size: 2vw;
    white-space: nowrap;
    overflow: hidden;
  }
  .css-typing p:nth-child(1) {
    width: 60%; /*manually set width*/
    -webkit-animation: type 2s steps(40, end);
    animation: type 2s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .css-typing p:nth-child(2) {
    width: 60%; /* manually set width */
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .css-typing p:nth-child(3) {
    width: 520px; /* manually set width */
    opacity: 0;
    -webkit-animation: type3 5s steps(20, end),
      blink 0.5s step-end infinite alternate;
    animation: type3 2s steps(20, end), blink 0.5s step-end infinite alternate;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid red;
    }
    100% {
      border: none;
    }
  }

  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid red;
    }
    100% {
      border: none;
    }
  }

  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid red;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid red;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }
`;
