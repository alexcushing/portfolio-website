import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const ACTIVE_CLASS = "plNav-link--active";

const Nav = () => (
  <div className="plNav-container">
  <nav className="plNav">
  <NavLink exact activeClassName={ACTIVE_CLASS} className="plNav-link" to="/">
    Home
  </NavLink>
  <NavLink
    exact
    activeClassName={ACTIVE_CLASS}
    className="plNav-link"
    to="/experience"
  >
    Experience
  </NavLink>
  <NavLink
    exact
    activeClassName={ACTIVE_CLASS}
    className="plNav-link"
    to="/skills"
  >
    Skills
  </NavLink>
  <NavLink
    exact
    activeClassName={ACTIVE_CLASS}
    className="plNav-link"
    to="/projects"
  >
    Projects
  </NavLink>
</nav>
  </div>
);

export default Nav;
