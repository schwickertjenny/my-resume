import { Wrapper } from "./AboutMe.styles";
import { personaData as pD } from "../data/resume.data";
// Image
import profilePic from "../images/about-me.jpg";

export function AboutMe() {
  return (
    <Wrapper className="card">
      <div id="summary-bar">
        <img id="profile-pic" src={profilePic} alt="Jenny" />
        <h2>
          {pD.firstName} {pD.sureName}
        </h2>
        <p>{pD.aboutMe}</p>
        <div className="categories">
          {pD.categories.map((category) => (
            <div id={category.categoryTitle}>
              <h3>{category.categoryTitle}</h3>
              <ul>
                {category.categoryData.map((data) => (
                  <li>
                    {data.label}{" "}
                    {data.value ? <span>| {data.value}</span> : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
