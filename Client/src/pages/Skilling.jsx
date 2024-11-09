import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.jpg";
import skillingtopimage from "../assets/skillingtopimage.png";

function Skilling() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://unithink-backend.vercel.app/api/skilling/"
        );
        const responseData = response.data;
        setCourses(responseData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",

        padding: "20px",
      }}
      className="px-4 md:px-8 bg-white"
    >
      <ToastContainer />

      <div className="text-center mt-10">
        <h1 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl text-black">
          Achieve Your Dreams: Skilling Academy
        </h1>
        <div className="h-1 bg-orange-500 w-20 mx-auto mb-5"></div>
        <div className="flex justify-center items-center">
          <img
            className="w-200 max-w-xs md:max-w-full h-auto md:h-80"
            src={skillingtopimage}
            alt="skilling top image"
          />
        </div>
        <p className="text-center text-gray-900 text-sm md:text-base">
          Take the first step towards a successful future. Schedule a free
          counselling session with us and start your journey towards achieving
          your education and career goals.
        </p>
      </div>

      {/* <div className="mt-10">
        <Link
          to="https://wa.me/message/GIWSQYCHN67RD1 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
          </button>
        </Link>
      </div> */}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex items-center justify-center h-full">
            <img src={Logo} alt="Logo" className="w-32 animate-pulse" />
          </div>
        </div>
      ) : (
        <>
          {/* Category Selection */}
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mt-5">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-2 rounded-lg text-sm md:text-base ${
                selectedCategory === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Students")}
              className={`px-3 py-2 rounded-lg text-sm md:text-base ${
                selectedCategory === "Students"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setSelectedCategory("Professional Certification")}
              className={`px-3 py-2 rounded-lg text-sm md:text-base ${
                selectedCategory === "Professional Certification"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Professionals Certification
            </button>
            <button
              onClick={() => setSelectedCategory("Become Corporate Ready")}
              className={`mt-2 md:mt-0 px-3 py-2 rounded-lg text-sm md:text-base ${
                selectedCategory === "Become Corporate Ready"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Become Corporate Ready
            </button>
            <button
              onClick={() => setSelectedCategory("Entrepreneurship")}
              className={`mt-2 md:mt-0 px-3 py-2 rounded-lg text-sm md:text-base ${
                selectedCategory === "Entrepreneurship"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Entrepreneurship
            </button>
          </div>

          <div className="mt-4 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {filteredCourses.map((course) => (
                <Link
                  key={course.skillId}
                  to={`/skillingdetails/${course.skillId}`}
                  className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                  style={{ width: "100%", maxWidth: "350px", height: "auto" }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={course.imageLink}
                      alt={course.courseName}
                      className="w-full object-cover"
                      style={{ height: "200px" }}
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-lg md:text-xl font-bold text-gray-900">
                      {course.courseName}
                    </h5>
                    <p className="text-sm md:text-base text-gray-600 mt-2">
                      {course.description}
                    </p>
                    <p className="text-md font-semibold text-orange-500 mt-2">
                      Price: {course.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Skilling;
