import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.jpg"; // Ensure the correct path to the logo
import skillingtopimage from '../assets/skillingtopimage.png'

function Skilling() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedCategory, setSelectedCategory] = useState("All"); // State to track selected category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/skilling/"
        );
        const responseData = response.data;
        setCourses(responseData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Ensure loading is stopped on error as well
      }
    };
    fetchData();
  }, []);

  // Function to filter courses based on selected category
  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="px-8 bg-white">
            <ToastContainer />

<div className="text-center mt-10">
  <h1 className="mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black">
    Achieve Your Dreams: Skilling Academy
  </h1>
  <div className="h-1 bg-orange-500 w-20 mx-auto mb-5"></div>
  <div className="flex justify-center items-center">
    <img className="w-auto h-60" src={skillingtopimage} alt="skilling top image" />
  </div>
  <p className="text-center text-gray-900">
    Take the first step towards a successful future. Schedule a free
    counselling session with us and start your journey towards achieving
    your education and career goals.
  </p>
</div>

      <div className="mt-10">
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
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex items-center justify-center h-full">
            <img src={Logo} alt="Logo" className="w-32 animate-pulse" />
          </div>
        </div>
      ) : (
        <>
          {/* <div className="text-center mt-10">
            <h1 className="mb-4 font-bold text-3xl md:text-3xl lg:text-3xl text-black">
              LIST OF COURSES
            </h1>
            <div className="h-1 bg-orange-500 w-20 mx-auto mb-5"></div>
          </div> */}

          {/* Category Selection */}
          <div className="flex justify-center space-x-4 mt-5">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg ${selectedCategory === "All" ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Students")}
              className={`px-4 py-2 rounded-lg ${selectedCategory === "Students" ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
            >
              Students
            </button>
            <button
              onClick={() => setSelectedCategory("Professional Certification")}
              className={`px-4 py-2 rounded-lg ${selectedCategory === "Professional Certification" ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
            >
              Professional Certification
            </button>
            <button
              onClick={() => setSelectedCategory("Become Corporate Ready")}
              className={`px-4 py-2 rounded-lg ${selectedCategory === "Become Corporate Ready" ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
            >
              Become Corporate Ready
            </button>
            <button
              onClick={() => setSelectedCategory("Entrepreneurship")}
              className={`px-4 py-2 rounded-lg ${selectedCategory === "Entrepreneurship" ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
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
                  style={{ width: "350px", height: "450px" }} // Adjust height to accommodate price
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={course.imageLink}
                      alt={course.courseName}
                      className="w-full h-2/3 object-cover"
                      style={{ height: "250px" }} // Adjust this if needed
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-xl font-bold text-gray-900">
                      {course.courseName}
                    </h5>
                    <p className="text-sm text-gray-600 mt-2">
                      {course.description}
                    </p>
                    <p className="text-lg font-semibold text-orange-500 mt-2">
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
