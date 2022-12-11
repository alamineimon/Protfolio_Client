import React from "react";
import "../Shared/Navbar/Navbar.css";

const Contact = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className="p-8 mb-6">
      <div id="contact" className="hero">
        <div className="card  flex-shrink-0 lg:w-1/2 sm:w-full shadow-2xl bg-base-100">
          <form action="https://formspree.io/f/mwkzgakk" method="POST">
            <h1 className="text-xl mt-8 -mb-2 text-center">GET IN TOUCH</h1>
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  className="input h-[200px] input-bordered"
                />
              </div>
              <div className="form-control lastNav mt-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/eimonalamin/"
                  className=" text-center"
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
