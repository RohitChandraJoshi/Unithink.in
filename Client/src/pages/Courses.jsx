import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import '../pages/CountryDetails.css';
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
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
      ) : (
        <>
          <div className="sttt">
            <h1 className='mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black relative flex flex-col items-center'>
              <span className='mb-5 mt-10'>LIST OF COURSES</span>
              <span className='relative mt-2'>
                <span className='mb-5 h-1 bg-orange-500 w-20 block'></span>
              </span>
            </h1>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
            {courses && courses.map((course) => (
              <div key={course.courseId} className="p-2 pb-10">
                <Link to={`/coursedetail/${course.courseId}`}>
                  <Card className="max-w-sm shadow-lg course-card hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #f0f8ff, #e6f7ff)' }}>
                    <img src={course.imageLink} alt={course.courseName} className="w-full h-48 object-cover" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                      {course.courseName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                      {course.description}
                    </p>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
