import React from "react";
import App from "../../App";
import { Link } from "react-router-dom";
import './nav.css'
const NavLinks = ({ toggle, isOpen }) => {
  return (
    <div className="navCon">
        <h2><Link to="/News">News</Link> </h2>| <h2><Link to="/connect">connect</Link></h2>
    </div>
  );
};

export default NavLinks;
