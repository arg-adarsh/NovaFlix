import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          className="logo"
          src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
          alt="logo"
        />
        <img
          className="avatar"
          src="https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
