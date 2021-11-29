//Styles
import { Wrapper } from "./Welcome.styles";
import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage } from "../data/resume.data";
// Image
// Credit: https://www.pexels.com/de-de/foto/grune-blatter-1072179/

function Welcome(): JSX.Element {
  return (
    <Wrapper>
      <h1>{welcomePage.hello}</h1>
      <p>{welcomePage.profession}</p>
    </Wrapper>
  );
}

export default Welcome;
