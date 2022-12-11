import React from "react";
import { BsGithub , BsLinkedin,  } from "react-icons/bs";

const Footer = (props) => {
  return (
    <div className="mb-2 bg-slate-200">
      <p className="text-center text-2xl mb-4">Find Me</p>
      <div className="flex justify-center items-center" >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
          href="https://github.com/alamineimon">
          <BsGithub /></a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eimonalamin/">
          <BsLinkedin /></a>
      </div>
    </div>
  );
};

export default Footer;
