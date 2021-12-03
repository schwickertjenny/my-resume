//Styles
import { Wrapper } from "./Welcome.styles";
// import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage, personaData } from "../data/resume.data";
// Image
import  profilePic  from '../images/profile-picture.jpg';

function Welcome(): JSX.Element {
  return (
    <Wrapper className="content">
      <div className="context-box">
        <div className="webpage-title">
        <img id="profile-pic" src={profilePic} alt="Jenny" />
        <h1>{personaData.firstName} {personaData.sureName}</h1>
        </div>
        
        <span></span>
        <p>{welcomePage.profession}</p>
      </div>
    </Wrapper>
  );
}

export default Welcome;
