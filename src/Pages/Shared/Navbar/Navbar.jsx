import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  // const menuItems = (
  //   <React.Fragment>
  //     {/* <nav>
  //       <ul>
  //         <li>
  //           <a href="/" className="menuItem">
  //             HOME
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#skills" className="menuItem">
  //             SKILLS
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#projects" className="menuItem">
  //             PROJECTS
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#contact" className="menuItem">
  //             CONTACT
  //           </a>
  //         </li>
  //       </ul>
  //     </nav> */}
  //     <a href="/" className="menuItem">
  //       HOME
  //     </a>
  //     <a href="#skills" className="menuItem">
  //       SKILLS
  //     </a>
  //     <a href="#projects" className="menuItem">
  //       PROJECTS
  //     </a>
  //     <a href="#contact" className="menuItem">
  //       CONTACT
  //     </a>
  //   </React.Fragment>
  // );

  return (
    <div className="navbar px-12 bg-base-300 fixed top-0  z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <li>
            <a href="/" className="menuItem">
              HOME
            </a>
          </li>
          <li>
            <a href="#skills" className="menuItem">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" className="menuItem">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#blogs" className="menuItem">
              BLOGS
            </a>
          </li>
          <li>
            <a href="#aboutme" className="menuItem">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#contact" className="menuItem">
              CONTACT
            </a>
          </li>
          </ul>
        </div>
        <p className="text-3xl text-bold text-steelblue ">Protfolio</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav>
        <ul>
          <li>
            <a href="/" className="menuItem">
              HOME
            </a>
          </li>
          <li>
            <a href="#skills" className="menuItem">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" className="menuItem">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#blogs" className="menuItem">
              BLOGS
            </a>
          </li>
          <li>
            <a href="#aboutme" className="menuItem">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#contact" className="menuItem">
              CONTACT
            </a>
          </li>
        </ul>
        </nav>
      </div>
      <div className="navbar-end lastNav">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eimonalamin/"
          className=""
        >
          HIRE ME
        </a>
      </div>
    </div>
  );
};

export default Navbar;
