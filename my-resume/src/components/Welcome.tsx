//Styles
import { Wrapper } from "./Welcome.styles";
import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage, personaData } from "../data/resume.data";
// Image
import  profilePic  from '../images/profile-picture.jpg';

function Welcome(): JSX.Element {
  return (
    <Wrapper className="content">
      <div className="context-box">
        <img id="profile-pic" src={profilePic} />
        <h1>{personaData.firstName} <span>{personaData.sureName}</span></h1>
        <p>{welcomePage.profession}</p>
      </div>
    </Wrapper>
  );
}

export default Welcome;
