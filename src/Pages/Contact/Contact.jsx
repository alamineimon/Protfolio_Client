import React from "react";
import { FaGithubSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="p-8 mb-16">
      <div id="contact" className="hero">
          <div className="card  flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
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
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Submit</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
