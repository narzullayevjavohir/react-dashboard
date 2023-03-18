import {
  faBlog,
  faBook,
  faContactCard,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ active, closeSide }) => {
  return (
    <>
      <ul
        className={`flex pt-32 flex-col sticky top-0 ${
          !active ? "hidden" : ""
        } h-screen bg-white shadow-2xl w-96 max-md:w-80 max-md:fixed z-20`}
      >
        <Link to="/">
          <li
            onClick={closeSide}
            className="px-10 py-7 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faHome} className="mr-3" /> Home
          </li>
        </Link>
        <Link to="/about">
          <li
            onClick={closeSide}
            className="px-10 py-7 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faBook} className="mr-3" /> About
          </li>
        </Link>
        <Link to="/blog">
          <li
            onClick={closeSide}
            className="px-10 py-7 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faBlog} className="mr-3" /> Blog
          </li>
        </Link>
        <Link to="/contact">
          <li
            onClick={closeSide}
            className="px-10 py-7 text-2xl font-semibold cursor-pointer hover:bg-gray-900 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faContactCard} className="mr-3" /> Contact
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
