import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo.jpg'; // Ensure the correct path to the logo

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unithink-backend.vercel.app/api/courses/');
        const responseData = response.data;
        setCourses(responseData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='px-8 bg-white'>
      <div className="mt-10">
        <Link to='https://wa.me/message/H6GTSW5G5WWTK1' target="_blank" rel="noopener noreferrer">
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
          <div className="text-center mt-10">
            <h1 className='mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black'>
              LIST OF COURSES
            </h1>
            <div className='h-1 bg-orange-500 w-20 mx-auto mb-5'></div>
          </div>
          
          <div className="mt-4 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {courses && courses.map((course) => (
                <Link 
                  key={course.courseId} 
                  to={`/coursedetail/${course.courseId}`} 
                  className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                  style={{ width: '350px', height: '410px' }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.imageLink} 
                      alt={course.courseName} 
                      className="w-full h-2/3 object-cover" 
                      style={{ height: '250px' }} // Adjust this if needed
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="text-xl font-bold text-gray-900">
                      {course.courseName}
                    </h5>
                    <p className="text-sm text-gray-600 mt-2">
                      {course.description}
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

export default Courses;
