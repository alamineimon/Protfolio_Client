import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Shared/Navbar/Navbar.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Font-End Developer", "MERN Stck Developer", "Back-End Developer"],
    loop: 0,
  });

  return (
    <div className="container">
      <div className="text-area">
        <p>I'M</p>
        <h1>AL AMIN EIMON</h1>
        <h3>I'M A DEVELOPER <span style={{ color: "steelblue" }}>{text} .</span>
           <Cursor cursorColor="steelblue" /></h3>
        <div className="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
          >
            Explore My Protfolio &#x27F6;
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
          >
            Connect With Me &#x27F6;
          </a>
        </div>
      </div>
    </div>
    // <div className="hero h-[600px]"
    //     style={{
    //       backgroundImage: `url("https://www.phreesia.com/wp-content/uploads/2021/09/20210929-homepage-header-staff-shortage.V11.jpg")`,
    //     }} >
    //   <div className="hero-content flex-col text-neutral-content justify-between lg:flex-row-reverse">

    //     <div className="lg:w-[800px]"></div>
    //     <div className=" lg:w-[500px] lg:ml-6 justify-items-end">
    //       <p className="text-5xl">I'M</p>
    //          <p className="mb-8 text-5xl">
    //            I'm Al Amin Eimon. <br />I'm a{" "}
    //            <span style={{ color: "steelblue" }}>{text} .</span>
    //            <Cursor cursorColor="steelblue" />
    //          </p>
    //            <div className="flex">
    //            <a
    //              target="_blank"
    //              rel="noopener noreferrer"
    //              href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
    //              className="resume-btn rounded"
    //            >
    //              RESUME<span className="flex justify-center items-center"><BsFillArrowDownCircleFill/></span>
    //            </a>
    //            </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
