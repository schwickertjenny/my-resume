import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Wrapper } from "./NavBar.styles";

// Data
import { NavBarLinks } from "../data/resume.data";

export function NavBar() {
  return (
    <>
      <Wrapper className="nav-bar">
        <nav>
          <ul>
            {NavBarLinks.map((link) => (
              <li>
                <Link to={link.value}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </Wrapper>
    </>
  );
}
