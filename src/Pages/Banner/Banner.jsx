import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import '../Shared/Navbar/Navbar.css'


const Banner = () => {
  const [text] = useTypewriter({
    words: ["Font-End-Developer", "MERN Stck Developer", "Back-End-Developer"],
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
             <h1 className="mb-5 text-5xl font-bold">Hello there !</h1>
             <p className="mb-8 text-3xl">
               I'm Al Amin Eimon. <br />I'm a{" "}
               <span style={{ color: "steelblue" }}>{text} .</span>
               <Cursor cursorColor="steelblue" />
             </p>
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
                 className="btn-hireMe"
               >
                 RESUME 
               </a>
           </div>
      </div>
    </div>

    // <div>
    //   <div
    //     className="hero h-[550px]"
    //     style={{
    //       backgroundImage: `url("https://www.phreesia.com/wp-content/uploads/2021/09/20210929-homepage-header-staff-shortage.V11.jpg")`,
    //     }}
    //   >
    //     {/* <div className="hero-overlay bg-opacity-60"></div> */}
    //     <div className=" text-left flex justify-between text-neutral-content">
    //       <div className=" w-1/2">
    //         <h1 className="mb-5 text-5xl font-bold">Hello there !</h1>
    //         <p className="mb-5 text-3xl">
    //           I'm Al Amin Eimon. <br /> I'm a{" "}
    //           <span style={{ color: "steelblue" }}>{text} .</span>
    //           <Cursor cursorColor="steelblue" />
    //         </p>
    //         <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
    //             className="px-8 py-2 text-lg hover:bg-green-500 hover:border-nonefont-semibold border rounded "
    //           >
    //             RESUME
    //           </a>
    //         </div>
    //       </div>
    //       <div className="w-1/2">
    //         <img src="https://i.ibb.co/ZmRvQLn/logo.png" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
