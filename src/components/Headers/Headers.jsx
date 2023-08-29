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
    setActiveIcon(icon)
  }
  return (
    <>
      <div className="main-head">
        <ul className="nav-link">
          <Link to="/" className="a-link1">
      
            <li className={`home ${activeIcon === 'home' ?'active':''}`} onClick={()=>fetchIcon('home')} >
              <FaChalkboard className={`icon ${activeIcon === 'home' ?'active':''}`} onClick={()=>fetchIcon('home')} />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/about" className="a-link1" >
            <li className={`about ${activeIcon === 'about' ? 'active' : ""} `}
            onClick={()=>fetchIcon('about')}
            >
            <FaRegAddressCard className="icon icon1" /> <span>ABOUT</span>
          </li>
          </Link>
         <Link className="a-link1" to="/skills"> 
            <li className={`skills ${activeIcon === 'skills' ? 'active' : ""} `}
            onClick={()=>fetchIcon("skills")}
            >
            <FaCode className="icon" /> <span>SKILLS</span>{" "}
            </li>
          </Link>
          <Link to="/portfolio" className="a-link1">
          <li className={`portfolio ${activeIcon === 'portfolio'?'active': ''} `} onClick={()=>fetchIcon('portfolio')}>
            
            <FaGem className="icon" /> <span>PORTFOLIO</span>{" "}
            </li>
            </Link>
          <Link to="/contact" className="a-link1">
            <li className={`contact ${activeIcon === 'contact' ? 'active':''}`} onClick={()=>fetchIcon('contact')}>
            <FaPaperPlane className="icon" /> <span>CONTACT</span>{" "}
            </li>
            </Link>
        </ul>
      </div>
    </>
  );
};
export default Headers;
