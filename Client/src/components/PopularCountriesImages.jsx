import React, { useEffect, useRef, useState } from "react";
import usa from "../assets/usa.jpg";
import uk from "../assets/uk.jpg";
import pp from "../assets/pp.jpeg";
import { Button } from "flowbite-react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./scrollleftcards.css";

const india =
  "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/india_icon.png?alt=media&token=ea6271ec-9ef4-4f8d-a800-a8404e78bb1c";
const switzerland =
  "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/switzerland_icon.png?alt=media&token=b4b671c0-0140-4e13-a4b0-6748871f965d";

const countries = [
  { c_id: "u006", c_name: "United Kingdom", image: uk },
  { c_id: "u007", c_name: "United States of America", image: usa },
  { c_id: "f003", c_name: "France", image: pp },
  { c_id: "i008", c_name: "India", image: india },
  { c_id: "s009", c_name: "Switzerland", image: switzerland },
];

function PopularCountriesImages() {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current && isScrolling) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const visibleWidth = scrollContainerRef.current.clientWidth;

        if (currentScrollLeft + visibleWidth >= scrollWidth) {
          setIsScrolling(false);
          setTimeout(() => {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
            setIsScrolling(true);
          }, 1000);
        } else {
          scrollContainerRef.current.scrollBy({
            left: 2,
            behavior: "smooth",
          });
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",
        padding: "20px",
      }}
      className="popular-countries-container"
    >
      <p className="text-center mt-10 pt-5 text-red-500 font-medium text-2xl">
        POPULAR COUNTRIES
      </p>

      <h1 className="success-stories-heading">
        Pick a country you like the most
      </h1>

      <div
        className="popular-countries-scroll"
        ref={scrollContainerRef}
        style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
      >
        {Array.from({ length: 5 }).map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {countries.map((country) => (
              <Link
                key={country.c_id}
                to={`/countrydetail/${country.c_id}`}
                className="country-card"
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <img
                  src={country.image}
                  alt={country.c_name}
                  className="country-image"
                />
                <div className="country-overlay">
                  <span className="country-overlay-text">{country.c_name}</span>
                </div>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </div>

      <Link to="/countries">
        <Button
          outline
          size="lg"
          onClick={scrollToTop}
          gradientDuoTone="pinkToOrange"
          pill
          className="browse-more-button hover:scale-105"
          style={{ zIndex: 1 }}
        >
          Browse more Countries <HiArrowCircleRight size={25} />
        </Button>
      </Link>
    </div>
  );
}

export default PopularCountriesImages;
