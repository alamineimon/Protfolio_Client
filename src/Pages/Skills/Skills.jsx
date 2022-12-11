import React from "react";

const Skills = () => {
  return (
    <div id="skills" data-aos="zoom-in-up">
      <div className="text-center mt-16">
        <h1 className=" text-4xl px-26 mb-12">SKILLS</h1>
        <div data-aos="fade-up"
     data-aos-duration="3000"  className="px-20">
          <h1 className="mb-6 text-xl">Font End</h1>
          <div className="grid lg:px-52 sm:px-32 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 lg:gap-2">
            
            {/* card-1 */}
            <div className=" h-[100px] w-[100px] bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://i.ibb.co/vJwjKLT/HTML.png"
                  className=" w-full h-[70px]"
                  alt="HTML5"
                />
              </figure>
              <div className=" text-sm mt-2 flex justify-center items-center">
                <p className="text-center">HTML5</p>
              </div>
            </div>

            {/* card-2 */}
            <div className=" bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/KwzZ9sM/CSS3-removebg-preview.png"
                  className="h-[70px]"
                  alt="CSS3"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">CSS3</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/yPzCXGs/Boothstap-preview.png"
                  className="h-[70px]"
                  alt="Boothstap"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Boothstap</p>
              </div>
            </div>
            {/* card-4 */}
            <div className=" bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/3z8fPsg/Tailwind.png"
                  className="h-[70px]"
                  alt="Tailwind"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Tailwind</p>
              </div>
            </div>
            {/* card-5 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/jDqY9xT/Java-Script-logo.png"
                  className="h-[70px]"
                  alt="JavaScript"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">JavaScript</p>
              </div>
            </div>
            {/* card-6 */}
            <div className=" bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/yR03qRn/react.png"
                  className="h-[70px]"
                  alt="ReactJs"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">ReactJs</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="2000"  className="px-20 my-12">
          <h1 className="mb-6 text-xl">Back End</h1>
          <div className="grid lg:px-96 sm:px-32 lg:grid-cols-4 lg:gap-2 sm:gap-6 sm:grid-cols-2">
            {/* card-1 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/Ld5XW7M/mongodb.png"
                  className="h-[70px]"
                  alt="MongoDB"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">MongoDB</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/MVk2BRr/nodejs-logo-FBE122-E377-seeklogo-com.png"
                  className="h-[70px]"
                  alt="Node Js"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Node Js</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/b6z4yw3/Express.png"
                  className="h-[70px]"
                  alt="Express Js"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Express Js</p>
              </div>
            </div>
            {/* card-4 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/qjxXNyD/download.png"
                  className="h-[70px]"
                  alt="Firebase"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Firebase</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="2000"  className="px-32">
          <h1 className="mb-6 text-xl">Others</h1>
          <div className="grid lg:px-96 sm:px-32 lg:grid-cols-3  sm:grid-cols-2 lg:gap-2 sm:gap-6">
            {/* card-1 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/1fK6LYL/Git-Icon-1788-C.png"
                  className="h-[70px]"
                  alt="Git"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Git</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/6bvxPSN/Visual-Studio-Code-1-35-icon-svg.png"
                  className="h-[70px]"
                  alt="VsCode"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">VsCode</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="  bg-base-100 shadow-xl h-[100px] w-[100px]">
              <figure>
                <img
                  src="https://i.ibb.co/xfLTwcn/Adobe-Photoshop-CC-900x0.png"
                  className="h-[70px]"
                  alt="Photoshop"
                />
              </figure>
              <div className=" mt-2 text-sm flex justify-center items-center">
                <p className="text-center">Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
