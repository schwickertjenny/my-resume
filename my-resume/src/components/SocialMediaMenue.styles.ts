import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: calc(50% + 40px);
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

  li a, li svg {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 30px;
  }

  /* li a:hover, li a:hover svg {
    color:  rgba(255,0,0,0.4);
    // border-bottom: 4px solid red;
  } */

  ul li a:visited {
    color: #fff;
    text-decoration: none;
  }


  @media (min-width:320px)  { 
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
    body {
    }
}
@media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
@media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
@media (min-width:801px)  { 
  /* tablet, landscape iPad, lo-res laptops ands desktops */ 
  li a {
  }
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
    /* hi-res laptops and desktops */ 
    body {
    }
}
`;
