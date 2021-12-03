import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenue";
// Font Awesome
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorStyle = styled.div`
  display: flex;
  /* height: 100vw; */
  h1 {
    font-size: 100px;
    margin: auto;
  }
`;

export default function Error404() {
  return (
    <>
      <NavBar />
      <SocialMediaMenue />
      <ErrorStyle>
          <h1>
            <FontAwesomeIcon icon={faSadTear} />
          </h1>
      </ErrorStyle>
    </>
  );
}
