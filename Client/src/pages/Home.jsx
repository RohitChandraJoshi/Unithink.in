import React from "react";
import BookNow from "../components/BookNow";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Intro from "../components/Intro";
import PopularCountriesImages from "../components/PopularCountriesImages";
import Articles from "../components/Articles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "../components/Services";
import PopularCourses from "../components/PopularCourses";
import Awards from "../components/Awards";
import SuccessStories from "../components/SuccessStories";
import ImageGallery from "../components/ImageGallery";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <ToastContainer />
      <BookNow />
      {/* <Intro/> */}
      <Services />

      <PopularCountriesImages />
      <PopularCourses />

      <ImageGallery />
      <AboutUs />

      <SuccessStories />
      <Awards />

      {/* <Categories/> */}

      <Articles />
    </div>
  );
}

export default Home;
