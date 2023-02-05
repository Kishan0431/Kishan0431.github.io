import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-scroll";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/#">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </a>
        <a href="/#">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </a>
        <a href="/#">
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </a>
        <a href="/#">
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Techstack
          </Link>
        </a>
        <a href="/#">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
