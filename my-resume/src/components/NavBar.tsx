import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Wrapper } from "./NavBar.styles";
// const NavLink = styled(Link)`
//   a {
//     color: pink;
//   }
// `;

export function NavBar() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <>
      <Wrapper className="nav-bar">
        <nav>
          <ul>
            <li>
              <Link
                // className={hovered ? "blink" : ""}
                // onMouseEnter={toggleHover}
                // onMouseLeave={toggleHover}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projekte</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </Wrapper>
    </>
  );
}
