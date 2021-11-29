import styled from "styled-components";

export const Wrapper = styled.div`

  padding-top: 50px;

  img.wallpaper {
    width: 100%;
  }
  h1 {
    font-size: 5vw;
  }
  p {
    font-size: 3vw;
  }

  @media (max-width: 830px) {
    h1 {
      font-size: 6vw;
    }
    p {
      font-size: 5vw;
    }
  }

  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 40px;
    }
  }
`;
