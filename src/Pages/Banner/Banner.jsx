import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Shared/Navbar/Navbar.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["FONT-END DEVELOPER", "MERN STACK DEVELOPER", "BACK-END DEVELOPER"],
    loop: 0,
  });

  return (
    <div className="container">
      <div className="text-area">
        <p>I'M</p>
        <h1>AL AMIN EIMON</h1>
        <h3>
          I'M A <span style={{ color: "steelblue" }}>{text} .</span>
          <Cursor cursorColor="steelblue" />
        </h3>
        <div className="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1SKXx8O13uZjOjeynDo1yO3n7ooTUeXS_/view?usp=sharing"
          >
            Download My Resume &#x27F6;
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/eimonalamin/"
          >
            Connect With Me &#x27F6;
          </a>
        </div>
      </div>
      <div className="social-icons">
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.ibb.co/cxH17wf/emaiccccccccc.png"
            className="text-white"
            alt=""
          />
        </a>
        <a
          href="https://github.com/alamineimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://i.ibb.co/3Rr6GZN/githunnnnnnnnn.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/eimonalamin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://i.ibb.co/WFzqbjV/linkedin.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
