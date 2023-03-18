import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active, handleClick }) => {
  return (
    <nav className="sticky top-0 w-full h-16 bg-gray-800 flex justify-around items-center max-sm:justify-between max-sm:px-10 max-sm:pr-5 z-10">
      <Link to="/">
        <h2 className="text-3xl text-white uppercase cursor-pointer font-semibold tracking-wider">
          Muhammad
        </h2>
      </Link>
      <div className="toggle" onClick={handleClick}>
        <FontAwesomeIcon
          icon={active ? faTimes : faBars}
          size="2x"
          className="cursor-pointer text-white"
        />
      </div>
    </nav>
  );
};

export default Header;
