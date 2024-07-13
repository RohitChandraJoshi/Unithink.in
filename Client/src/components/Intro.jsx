import React from "react";
import intro_png from "../assets/logo.jpg";

const Intro = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto lg:py-16 bg-white border-b">
        <div className="w-10/12 mx-auto lg:flex">
          <div className="lg:w-6/12 flex items-start justify-start bg-white">
            <img className="w-full sm:w-3/4 md:w-2/3 lg:w-full" src={intro_png} alt="Intro" />
          </div>
          <div className="lg:px-16 flex flex-col justify-center gap-10 bg-white">
            {/* Heading */}
            <div className="text-2xl bg-white">
              <h1 className="uppercase font-bold tracking-widest bg-white">
                Introduce
              </h1>
            </div>
            <div className="text-xl text-[#737373]">
              <p className="bg-white">
                UniThink Education International is dedicated to the education
                and business for helping them set their processes, developing
                their human resources, manage the entire supply chain end to
                end. It's a network connecting top leaders of education and
                industry and establish the dialogue for capturing the
                opportunities which are amicable for both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
