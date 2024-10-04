import { useState, useEffect, useRef, useCallback } from "react";
import resume from "/Resume.pdf";
import "animate.css";
import Hamburger from "hamburger-react";
import Logo from "../../Assets/Logo.webp";
import "./Navbar.css";

const Navbar = ({ onPageChange, Custom }) => {
  const [toggleMenu, setTogglemenu] = useState(false);
  const [navfixed, setnavfixed] = useState(false);
  const navbarmenu = useRef(null);
  const menulinks = useRef(null);

  const handleOutsideClick = useCallback(
    (e) => {
      if (toggleMenu && !navbarmenu.current.contains(e.target)) {
        setTogglemenu(false);
      }
    },
    [toggleMenu]
  );

  useEffect(() => {
    const Menulinks = menulinks.current.querySelectorAll("li");
    Menulinks.forEach((each) => {
      each.addEventListener("click", () => setTogglemenu(false));
    });
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setnavfixed(false);
      } else {
        setnavfixed(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleOutsideClick, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <nav
      className={`navbar custom-pagination ${navfixed ? "fixed" : ""}`}
      ref={Custom}
    >
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" width={100} height={15} />
      </div>
      <div className="navbar__navbar-links">
        <ul>
          <li
            onClick={() => onPageChange.slideTo(0)}
            className="animate__animated animate__faster animate__fadeInDown"
          >
            <a href="#Home">Home</a>
          </li>
          <li
            onClick={() => onPageChange.slideTo(1)}
            className="animate__animated animate__faster animate__fadeInDown"
          >
            <a href="#About">About</a>
          </li>
          <li
            onClick={() => onPageChange.slideTo(2)}
            className="animate__animated animate__faster animate__fadeInDown"
          >
            <a href="#Skills">Skills</a>
          </li>
          <li
            onClick={() => onPageChange.slideTo(3)}
            className="animate__animated animate__faster animate__fadeInDown"
          >
            <a href="#Projects">Projects</a>
          </li>
          <li
            onClick={() => onPageChange.slideTo(4)}
            className="animate__animated animate__faster animate__fadeInDown"
          >
            <a href="#Contact">Contact</a>
          </li>
          <li className="animate__animated animate__faster animate__fadeInDown">
            <a href={resume} download={true} className="glow-on-hover">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className={`navbar__menu`} ref={navbarmenu}>
        <Hamburger
          size={25}
          toggled={toggleMenu}
          toggle={setTogglemenu}
          aria-labelledby="open menu"
        />
        <ul className={`${toggleMenu ? "menu-active" : ""}`} ref={menulinks}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href={resume} download={true}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
