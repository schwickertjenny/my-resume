//Styles
import { Wrapper } from "./SocialMediaMenue.styles";
// Data
import { SocialMediaLinks } from "../data/resume.data";

// Font Awesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXingSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaMenue(): JSX.Element {
  return (
    <Wrapper className="social-media">
      <ul>
        {SocialMediaLinks.map((link) => (
          <li key={link.name}>
            <a target="_blank" href={link.linkToWebpage}>
              {link.name == "E-Mail" ? (
                <FontAwesomeIcon icon={faEnvelope} />
              ) : link.name == "Xing" ? (
                <FontAwesomeIcon icon={faXingSquare} />
              ) : link.name == "LinkedIn" ? (
                <FontAwesomeIcon icon={faLinkedin} />
              ) : link.name == "GitHub" ? (
                <FontAwesomeIcon icon={faGithub} />
              ) : (
                ""
              )}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default SocialMediaMenue;
