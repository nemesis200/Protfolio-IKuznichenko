import { NavLink } from "react-router-dom";

import BtnDarkMoud from "../btnDarkMoud/btnDarkMoud";

import "./Navbar.css";

type Props = {};
const Navbar = (props: Props) => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link ";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to={"/"}>
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/contacts"}
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item"></li>
          </ul>
          <BtnDarkMoud />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
