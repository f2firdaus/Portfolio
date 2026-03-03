import { Link } from "react-router-dom";
import "./headers.scss";
import {
  FaChalkboard,
  FaRegAddressCard,
  FaCode,
  FaGem,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

const Headers = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const fetchIcon = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <header className="main-head">
      <nav className="nav-container">
        <ul className="nav-link">
          <li>
            <Link to="/" className={`nav-item ${activeIcon === 'home' ? 'active' : ''}`} onClick={() => fetchIcon('home')}>
              <FaChalkboard className="icon" />
              <span className="tooltip">Home</span>
            </Link>
          </li>

          <li>
            <Link to="/about" className={`nav-item ${activeIcon === 'about' ? 'active' : ''}`} onClick={() => fetchIcon('about')}>
              <FaRegAddressCard className="icon" />
              <span className="tooltip">About</span>
            </Link>
          </li>

          <li>
            <Link to="/skills" className={`nav-item ${activeIcon === 'skills' ? 'active' : ''}`} onClick={() => fetchIcon('skills')}>
              <FaCode className="icon" />
              <span className="tooltip">Skills</span>
            </Link>
          </li>

          <li>
            <Link to="/portfolio" className={`nav-item ${activeIcon === 'portfolio' ? 'active' : ''}`} onClick={() => fetchIcon('portfolio')}>
              <FaGem className="icon" />
              <span className="tooltip">Portfolio</span>
            </Link>
          </li>

          <li>
            <Link to="/contact" className={`nav-item ${activeIcon === 'contact' ? 'active' : ''}`} onClick={() => fetchIcon('contact')}>
              <FaPaperPlane className="icon" />
              <span className="tooltip">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
