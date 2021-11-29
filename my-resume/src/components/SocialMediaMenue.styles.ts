import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  width: auto;
  margin-top: -8em;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 10% 0 0 10%;
  text-align: center;

  ul {
    padding: 0 25px;
  }

  li {
    list-style-type: none;
    /* margin: 30px 0; */
  }

  li a {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 3vw;
  }

  ul li a:visited {
    color: #fff;
    text-decoration: none;
  }
`;
