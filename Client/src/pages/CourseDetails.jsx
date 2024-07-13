import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CourseDetails() {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`https://unithink-backend.vercel.app/api/coursesdetails/${courseId}`);
        setCourseDetails(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Course not found');
        } else {
          setError('Error fetching data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      {courseDetails ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{courseDetails.course_name}</h1>
          
          <div className="mb-8">
            <img src={courseDetails.top_image} alt={courseDetails.course_name} className="w-full md:w-5/5 h-auto object-cover rounded-lg shadow-lg mb-4" />
          </div>

          {courseDetails.countries && (
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl font-semibold mb-2">Countries Offering {courseDetails.course_name}</h2>
              {Object.entries(courseDetails.countries).map(([country, details], index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{country}</h3>
                  <ul className="list-disc list-inside">
                    {Object.values(details).map((detail, idx) => (
                      <li key={idx} className="text-gray-800 mb-2">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Career Opportunities</h2>
            <ul className="list-disc list-inside">
              {Object.values(courseDetails.career_opportunities).map((opportunity, index) => (
                <li key={index} className="text-gray-800 mb-2">{opportunity}</li>
              ))}
            </ul>
            <p className="text-gray-800">{courseDetails.career_conclusion}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-800 mb-2">{courseDetails.contact_info}</p>
            <Link to="/booking">
              <button className="bg-black text-white py-3 px-6 hover:bg-red-500" onClick={scrollToTop}>
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

export default CourseDetails;
