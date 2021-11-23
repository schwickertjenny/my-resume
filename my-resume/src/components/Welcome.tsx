import React from "react";
//Styles
import { Wrapper, TypeWriter } from "./Welcome.styles";
// Data
import { personaData, welcomePage } from "../data/resume.data";

let fullName = personaData.firstName + " " + personaData.sureName;

function Welcome(): JSX.Element {
  return (
      <>
        {/* <TypeWriter /> */}
        <Wrapper >
            <img src={ personaData.profilePic } alt={ fullName }/>
            <div className="typewriter">
                <h1>{ welcomePage.hello }</h1>
                <p>{ welcomePage.profession }</p>
            </div>
        </Wrapper>
    </>
  );
}

export default Welcome;