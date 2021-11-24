import { Outlet, Link } from "react-router-dom";
import { Wrapper } from "./NavBar.styles";

// Data
import { NavBarLinks } from "../data/resume.data";

export function NavBar() {
  return (
    <Wrapper>
      <div className="nav-bar">
        <nav>
          <ul>
            {NavBarLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.value}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    </Wrapper>
  );
}
