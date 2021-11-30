import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding: 50px; */
  width: auto;
  display: flex;
  height: 100vh;
  margin-right: 120px;

  .context-box {
    /* height: 100%; */
    margin: auto;
    text-align: center;
    padding: 50px;
    background-color: #2934448c;
    border-radius: 0 20px 20px 0;
  }
  /* .context-box:hover {
    background-color: #4c3c3c69;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  } */

  img#profile-pic {
    border-radius: 50%;
    border: 15px solid #161b22;
    width: 40%;
    max-width: 400px;
  }
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  /* span {
    color: rgba(255,0,0,0.4);
  } */
  p {
    font-size: 20px;
    padding: 0 200px;
    letter-spacing: 2px;
    text-align: left;
  }

  @media (max-width: 830px) {
    /* h1 {
      font-size: 6vw;
    }
    p {
      font-size: 5vw;
    } */
  }

  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    /* h1 {
      font-size: 50px;
    }
    p {
      font-size: 40px;
    } */
  }
`;
