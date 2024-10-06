import React from "react";
import aboutus from "../assets/aboutus.png";
import aboutusperson from "../assets/aboutusperson1.png";
import { BsCheck2All } from "react-icons/bs";
import aboutshape from "../assets/about-shape-2.svg";
import Quiz from "./Quiz";
import bruceleeimage from "../assets/brucelee.jpg";

function AboutUs() {
  return (
    <div>
      <div>
        <div>
          <div
            style={{
              backgroundImage: `url(${aboutus})`,
              marginTop: "5%",
              marginBottom: "2%",
            }}
            className="bg-left bg-no-repeat "
          >
            <div className="relative mx-auto flex max-w-5xl flex-col md:flex-row md:items-center sm:gap-2 p-2">
              <Quiz />
              <div className="p-16 flex flex-col md:flex-row items-center gap-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-4">
                  "I fear not the man who has practiced{" "}
                  <span className="text-red-500">
                    {" "}
                    10,000 kicks once, but I fear the man who has{" "}
                  </span>{" "}
                  practiced one kick 10,000 times." - Bruce Lee
                </h5>
                <img
                  className="w-40 h-auto object-cover"
                  src={bruceleeimage}
                  alt="bruceleeimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
