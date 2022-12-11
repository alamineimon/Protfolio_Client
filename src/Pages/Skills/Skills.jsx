import React from "react";

const Skills = () => {
  return (
    <div id="skills px-12">
      <div className="text-center">
        <h1 className=" text-4xl mb-12">SKILLS</h1>
        <div className="px-20">
          <h1 className="mb-6 text-xl">Font End</h1>
          <div className="grid grid-cols-6 gap-2">
            {/* card-1 */}
            <div className="  bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/vJwjKLT/HTML.png" className="h-[200px]" alt="HTML5" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">HTML5</p>
              </div>
            </div>
            {/* card-2 */}
            <div className=" bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/KwzZ9sM/CSS3-removebg-preview.png" className="h-[200px]" alt="CSS3" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">CSS3</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="  bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/yPzCXGs/Boothstap-preview.png" className="h-[200px]" alt="Boothstap" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">Boothstap</p>
              </div>
            </div>
            {/* card-4 */}
            <div className=" bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/3z8fPsg/Tailwind.png" className="h-[200px]" alt="Tailwind" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">Tailwind</p>
              </div>
            </div>
            {/* card-5 */}
            <div className="  bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/jDqY9xT/Java-Script-logo.png" className="h-[200px]" alt="JavaScript" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">JavaScript</p>
              </div>
            </div>
            {/* card-6 */}
            <div className=" bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://i.ibb.co/yR03qRn/react.png" className="h-[200px]" alt="ReactJs" />
              </figure>
              <div className=" mt-6 text-2xl flex justify-center items-center">
                <p className="text-center">ReactJs</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Back End</h1>
        </div>
        <div>
          <h1>Others</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
