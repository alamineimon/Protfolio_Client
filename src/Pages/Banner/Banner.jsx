import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{ backgroundImage: `url("https://www.phreesia.com/wp-content/uploads/2021/09/20210929-homepage-header-staff-shortage.V11.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there !</h1>
            <p className="mb-5 text-3xl">
              I'm Al Amin Eimon <br />I'm a MERN Stack Developer with less than a year experience
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
              
              <a target='_blank'
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
                className="px-8 py-2 text-lg hover:bg-green-500 hover:border-nonefont-semibold border rounded "
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
