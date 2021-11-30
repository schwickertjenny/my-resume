//Styles
import { Wrapper } from "./Welcome.styles";
// import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage, personaData } from "../data/resume.data";
// Image
import  profilePic  from '../images/profile-picture.jpg';
// Font Awesome
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Welcome(): JSX.Element {
  return (
    <Wrapper className="content">
      <div className="context-box">
        <img id="profile-pic" src={profilePic} />
        <h1>{personaData.firstName} {personaData.sureName}</h1>
        <p>{welcomePage.profession}</p>
      </div>
    </Wrapper>
  );
}

export default Welcome;
