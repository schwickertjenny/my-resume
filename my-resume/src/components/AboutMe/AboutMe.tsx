import { Wrapper } from "./AboutMe.styles";
import {
  personaData as pD,
  ExperienceSummary as eS,
} from "../../data/resume.data";
// Image
import profilePic from "../../images/about-me.jpg";

export function AboutMe() {
  return (
    <Wrapper className="card margin-left-300">
      {/*------------------SUMMARY BAR LEFT------------------*/}
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
                    {data.label} {data.value ? <span>| {data.value}</span> : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*------------------EXPERIENCE------------------*/}
      <div className="experience">
        {eS.experienceElem.map((group) => (
          <>
            <h2>{group.experienceType}</h2>
            <div className={group.experienceType}>
              {group.experienceData.map((entry) => (
                <>
                  <h3>
                    {entry.duration}
                    <span> | {entry.position}</span>
                  </h3>
                  <ul>
                    {entry.tasks.map((task) => (
                      <li>
                        {task.label}: {task.value}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </>
        ))}

        <div className="badges"></div>
      </div>
    </Wrapper>
  );
}
