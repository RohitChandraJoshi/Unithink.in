import React from "react";
import usa from "../assets/usa.jpg";
import uk from "../assets/uk.jpg";
import homebg from "../assets/homebg.png";
import { Button } from "flowbite-react";
import pp from "../assets/pp.jpeg";
import videoShape from "../assets/video-shape-1.png";
import videoShape2 from "../assets/video-shape-2.png";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const countries = [
  { c_id: "u006", c_name: "United Kingdom", image: uk },
  { c_id: "u007", c_name: "United States of America", image: usa },
  { c_id: "f003", c_name: "France", image: pp },
];

function PopularCountriesImages() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${homebg})` }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div>
          <div className="flex items-center mt-5">
            <div className="text-center mx-auto pt-5">
              <p className="mb-4 mt-10 pt-5 text-red-500 font-medium">
                POPULAR COUNTRIES
              </p>
              <h1 className="mb-4 text-5xl font-semibold sm:text-lg md:text-3xl">
                Pick a country you like the most
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-5 mx-auto text-center gap-10 items-center lg:ml-12 ml-8 mr-9">
          {countries.map((country) => (
            <Link
              key={country.c_id}
              to={`/countrydetail/${country.c_id}`}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div className="relative max-w-100 mb-4 group">
                <img
                  src={country.image}
                  alt={country.c_name}
                  className="rounded-xl shadow-xl w-full group-hover:blur-sm transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-xl">
                  <span className="text-white text-xl font-bold">
                    {country.c_name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/countries">
          <Button
            outline
            size="lg"
            onClick={scrollToTop}
            gradientDuoTone="pinkToOrange"
            pill
            className="mx-auto justify-items-center mt-12 hover:scale-105"
            style={{ zIndex: 1, marginBottom: "60px" }}
          >
            Browse more Countries <HiArrowCircleRight size={25} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PopularCountriesImages;
