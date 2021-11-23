import React from "react";
//Styles
import { Wrapper } from "./Welcome.styles";
// Data
import { personaData, welcomePage } from "../data/resume.data";

let fullName = personaData.firstName + " " + personaData.sureName;

function Welcome() {
  return (
    <Wrapper>
      <img src={ personaData.profilePic } alt={ fullName }/>
      <h1>{ welcomePage.hello } { fullName }</h1>
      <p>{ welcomePage.profession }</p>
    </Wrapper>
  );
}

export default Welcome;
