import React from "react";
import aboutus from "../assets/aboutus.png";
import aboutusperson from "../assets/aboutusperson1.png";
import { BsCheck2All } from "react-icons/bs";
import aboutshape from "../assets/about-shape-2.svg";
import Quiz from "./Quiz";

function AboutUs() {
  return (
    <div>
      <div>
        <div>
          <div
            style={{ backgroundImage: `url(${aboutus})` }}
            className="bg-left bg-no-repeat"
          >
            <div className="relative mx-auto flex max-w-5xl flex-col md:flex-row md:items-center sm:gap-2 p-2">
              <Quiz />
              <div className="p-16">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-4 ">
                  "I fear not the man who has practiced{" "}
                  <span className="text-red-500">
                    {" "}
                    10,000 kicks once, but I fear the man who has{" "}
                  </span>{" "}
                  practiced one kick 10,000 times." - Bruce Lee
                </h5>
                <p className="font-normal text-gray-500 dark:text-gray-400 pb-4">
                  Our Expertise -
                </p>
                <div className="">
                  <p className="flex gap-2">
                    <BsCheck2All /> Education & Career Counselling
                  </p>
                  <p className="flex gap-2">
                    <BsCheck2All /> Find Your University & Course
                  </p>
                  <p className="flex gap-2">
                    <BsCheck2All /> Skilling Academy
                  </p>
                  <p className="flex gap-2">
                    <BsCheck2All /> Education & Business Counsultancy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
