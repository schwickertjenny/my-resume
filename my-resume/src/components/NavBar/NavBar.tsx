import { Link, Outlet } from "react-router-dom";
import { Wrapper } from "./NavBar.styles";
// Data
import { NavBarLinks } from "../../data/resume.data";
// Font Awesome
import { faHome, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar() {
  return (
    <Wrapper className="nav-bar">
      <nav>
        <ul>
          {NavBarLinks.map((link) => (
            <li key={link.label} id={link.label === "Download CV" ? "cv" : ""}>
              <Link to={link.value}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </Wrapper>
  );
}