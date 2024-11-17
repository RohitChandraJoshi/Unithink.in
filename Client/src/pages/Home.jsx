import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import FullPageNotification from "../components/FullPageNotification";
import BookNow from "../components/BookNow";
import Services from "../components/Services";
import PopularCountriesImages from "../components/PopularCountriesImages";
import PopularCourses from "../components/PopularCourses";
import ImageGallery from "../components/ImageGallery";
import AboutUs from "../components/AboutUs";
import SuccessStories from "../components/SuccessStories";
import Awards from "../components/Awards";
import Articles from "../components/Articles";


const Home: React.FC = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="overflow-x-hidden">
      {/* Toast Notifications */}
      <ToastContainer />


      {showNotification && (
        <FullPageNotification
          message="UniThink Opens Doors to Dubai’s Thriving Hospitality Industry"
          youtubeId="JVsh1XzninY" // Replace with your YouTube video ID
          registerUrl="https://forms.gle/yDCZV13t8snyoU94A" // Replace with your registration URL
          callToAction="Register Now" // Replace with your desired CTA text
          onClose={() => setShowNotification(false)} // Hide notification when closed
        />
      )}

      {/* Page Sections */}
      <BookNow />
      <Services />
      <PopularCountriesImages />
      <PopularCourses />
      <ImageGallery />
      <AboutUs />
      <SuccessStories />
      <Awards />
      <Articles />
    </div>
  );
};

export default Home;
