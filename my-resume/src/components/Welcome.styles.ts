import styled from "styled-components";

export const Wrapper = styled.div`

  /* padding: 50px; */
  width: auto;
  display: flex;
  margin: 0;
  height: 100vh;
  margin-right: 80px;

  .context-box{
    /* height: 100%; */
    margin: auto;
    text-align: center;
    padding: 50px;
  }

  img#profile-pic {
    border-radius: 50%;
    border: 10px solid rgba(255,0,0,0.1);
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
    padding: 0 150px;
    letter-spacing: 2px;
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
