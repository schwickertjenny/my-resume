//Styles
import { Wrapper } from "./Welcome.styles";
import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage } from "../data/resume.data";

function Welcome(): JSX.Element {
  return (
    <>
      {/* <TypeWriter /> */}
      <Wrapper>
        {/* <img src={ personaData.profilePic } alt={ fullName }/> */}

        <TypeWriter>
            <h1>{welcomePage.hello}</h1>
          {/* <div className="css-typing"> */}
            <p>{welcomePage.profession}</p>
          {/* </div> */}
        </TypeWriter>
      </Wrapper>
    </>
  );
}

export default Welcome;
