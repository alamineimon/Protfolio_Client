import React from "react";
import '../Shared/Navbar/Navbar.css'

const ProjectsBody = () => {
  return (
    <div id="projects" className=" p-6">
      <h1 className="text-4xl text-bold pt-9 text-center ">
        SOME OF MY BEST PROJECTS
      </h1>
      <div className="lg:flex  sm:block md:block mt-8">
        {/* card-1 */}
        <div className="card  card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/gyZXymp/Athetic-Dent.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Athetic Dent</h2>
            <p>User Reviews Taking Website</p>
            <p>
              Features: <br />
              1. 2 Roles Dashboard such as Admin and User, Admin can make any
              user to Admin and delete any user. <br />
              2. Admin also makes admin any user or delete any product or any
              user. <br />
              3. Users and Sellers can pay his/her products from MyProduct
              Section
            </p>
            <div className="card-actions justify-end">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
              
              <a target='_blank'
                rel="noopener noreferrer"
                href="https://incredible-trip.web.app"
                className="btn-hireMe"
              >
                Live Link
              </a>
            </div>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card  lg:mx-8 md:my-8 sm:my-8 lg:my-0 card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/4SnDZd5/TireX.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TireX</h2>
            <p>Second-Hand Bike Buy & Sell Website</p>
            <p>
              Features: <br />
              1. 3 Roles Dashboard such as Admin, Seller, User. Admin Can do
              anything likes add/delete products
              <br />
              2. Users can see the Home Page and Services But he/she have to
              login to Add any service/Reviews
            </p>
            <div className="card-actions justify-end">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
              
              <a target='_blank'
                rel="noopener noreferrer"
                href="https://tirex-b150d.web.app"
                className="btn-hireMe"
              >
                Live Link
              </a>
            </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card  card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/Z6c78TR/P-Teams.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">P-Teams</h2>
            <p>Online Course Selling Website</p>
            <p>
              Features: <br />
              1. User Can see any Course but he/she has to login for buy any
              courses
              <br />
              2. User can see any course Information and download any specific course pdf info
            </p>
            <div className="card-actions justify-end">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
              
              <a target='_blank'
                rel="noopener noreferrer"
                href="https://p-teams.web.app"
                className="btn-hireMe"
              >
                Live Link
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBody;
