//Styles
import { Wrapper } from "./Welcome.styles";
import { TypeWriter } from "./TypeWriter.styles";
// Data
import { welcomePage } from "../data/resume.data";
// Image
// Credit: https://www.pexels.com/de-de/foto/grune-blatter-1072179/
import wallPaper from "../images/wallpaper.jpg";

function Welcome(): JSX.Element {
  return (
    <>
      {/* <TypeWriter /> */}
      <Wrapper>
        <TypeWriter>
          <img className="wallpaper" src={wallPaper} />
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
