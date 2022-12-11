
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div data-aos="zoom-in" id="aboutme" className="bg-base-300">

      <div className="lg:flex justify-center items-center">
        <div className="avatar">
          <div className="lg:w-72 rounded">
            <img src="https://i.ibb.co/0tX66v4/v921-audi-wit-014.jpg" alt="" />
          </div>
        </div>
        <div className="lg:ml-4 mt-8">
          <h1 className="text-3xl">Al Amin Eimon</h1>
          <p className="text-sm">MERN Stack Developer, Jhenaidah, Bangladesh.</p>
          <div className="lastNav mt-5">
            <a  target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/eimonalamin/">Read my blog</a>
          </div>
          <p className="my-8 ">
            I'm a MERN Stack developer who learned new technologies day by day. <br />
            I have done many full-stack projects with React and Node js. 
            I'm an <br /> expert in React JS, Express JS, Node JS, MongoDB, JWT,  
            JavaScript, <br /> Tailwind CSS, Bootstrap, HTML5 and CSS3.
            My work experience and <br /> skills make me a great match for your job.
          </p>

          <div className="flex mt-4">
            <div>
              <h1 className="text-xl">Skill</h1>
              <p>Front End Developer</p>
            </div>
            <div className="ml-6">
            <h1 className="text-xl">Education</h1>
              <p>Jhenaidah Polytechnic Institute</p>
            </div>
          </div>
          <div className="my-3 pb-3">
            <ul className="flex">
                <li className="" ><a target="_blank"
                  rel="noopener noreferrer" href="https://www.linkedin.com/in/eimonalamin/"><FaLinkedin></FaLinkedin></a></li>
                <li className="ml-2" ><a target="_blank"
                  rel="noopener noreferrer" href="https://www.facebook.com/alamineimon16/"><FaFacebook></FaFacebook></a></li>
                <li className="ml-2" ><FaTwitter></FaTwitter></li>
                <li className="ml-2" ><FaInstagram></FaInstagram></li>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;