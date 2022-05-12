import React from "react";
import App from "../../App";
import { Link } from "react-router-dom";

const NavLinks = ({ toggle, isOpen }) => {
  return (
    <div>
      <nav>
        <Link to="/News">News</Link> | <Link to="/connect">connect</Link>
      </nav>
    </div>
  );
};

export default NavLinks;
