import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import '../Shared/Navbar/Navbar.css'
import { BsFillArrowDownCircleFill } from "react-icons/bs";


const Banner = () => {
  const [text] = useTypewriter({
    words: ["Font-End Developer", "MERN Stck Developer", "Back-End Developer"],
    loop: 0,
  });

  return (
    <div className="hero h-[550px]"
        style={{
          backgroundImage: `url("https://www.phreesia.com/wp-content/uploads/2021/09/20210929-homepage-header-staff-shortage.V11.jpg")`,
        }} >
      <div className="hero-content flex-col text-neutral-content justify-between lg:flex-row-reverse">
        <div className="lg:w-[800px]">
       
        </div>
        <div className=" lg:w-[500px] lg:ml-6 justify-items-end">
          <p className="text-5xl">HI!</p>
             <p className="mb-8 text-5xl">
               I'm Al Amin Eimon. <br />I'm a{" "}
               <span style={{ color: "steelblue" }}>{text} .</span>
               <Cursor cursorColor="steelblue" />
             </p>
               <div className="flex">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
                 className="resume-btn rounded"
               >
                 RESUME<span className="flex justify-center items-center"><BsFillArrowDownCircleFill/></span>
               </a>
               </div>
           </div>
      </div>
    </div>
  );
};

export default Banner;
