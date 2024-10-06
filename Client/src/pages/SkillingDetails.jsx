import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function SkillingDetails() {
  const { skillId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://unithink-backend.vercel.app/api/skillingDetails/${skillId}`
        );
        setCourseDetails(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Course not found");
        } else {
          setError("Error fetching data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [skillId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRegisterClick = () => {
    scrollToTop();
    navigate("/registration", {
      state: { courseName: courseDetails.course_name },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
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
      {courseDetails ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {courseDetails.course_name}
          </h1>

          <div className="mb-2">
            <img
              src={courseDetails.top_image}
              alt={courseDetails.course_name}
              className="w-full md:w-5/5 h-auto object-cover rounded-lg shadow-lg "
            />
          </div>

          {/* About the Course */}
          <div className="bg-white p-2 rounded-lg shadow-lg mb-1">
            <h2 className="text-xl font-semibold mb-2">About the Course</h2>
            <p className="text-gray-800 mb-2">{courseDetails.about_course}</p>
          </div>

          {/* Price */}
          <div className="bg-white p-2 rounded-lg shadow-lg mb-1">
            <h2 className="text-xl font-semibold mb-2">Price</h2>
            <p className="text-gray-800 mb-2">{courseDetails.course_price}</p>
          </div>

          {/* Course Duration */}
          <div className="bg-white p-2 rounded-lg shadow-lg mb-1">
            <h2 className="text-xl font-semibold mb-2">Course Duration</h2>
            <p className="text-gray-800 mb-2">
              {courseDetails.course_duration}
            </p>
          </div>

          {/* Register Button */}
          <div className="bg-white p-2 rounded-lg shadow-lg mb-2">
            <button
              className="bg-blue-500 text-white py-3 px-6 hover:bg-blue-700 rounded"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
          </div>

          {/* Why Choose This Course */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Why Choose This Course?
            </h2>
            <p className="text-gray-800 mb-2">
              {courseDetails.why_choose_this_course}
            </p>
          </div>

          {/* What Will You Learn? */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">What Will You Learn?</h2>
            <ul className="list-disc list-inside">
              {courseDetails.what_will_you_learn.map((item, index) => (
                <li key={index} className="text-gray-800 mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Modules */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Course Modules</h2>
            <ul className="list-disc list-inside">
              {courseDetails.course_modules.map((module, index) => (
                <li key={index} className="text-gray-800 mb-2">
                  {module}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-800 mb-2">{courseDetails.enroll_now}</p>
            <Link to="/booking">
              <button
                className="bg-black text-white py-3 px-6 hover:bg-red-500"
                onClick={scrollToTop}
              >
                Book Now!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SkillingDetails;
