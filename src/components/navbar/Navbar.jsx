import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navigation ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="mobile">
        <div className="logo">
          <NavLink className="NavLink" to="/">
            <img src="./src/assets/SF__logo.png" alt="Logo Space Flight" />
          </NavLink>
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
            <li>
              <NavLink className="NavLink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/sources">
                Sources
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/search">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/meteoLaunchpadSite">
                Meteo Launch sites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
