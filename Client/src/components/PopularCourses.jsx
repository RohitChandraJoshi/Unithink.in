import React from 'react';
import { Button } from 'flowbite-react';
import homebg from '../assets/homebg.png';
import videoShape from '../assets/video-shape-1.png';
import videoShape2 from '../assets/video-shape-2.png';
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const courses = [
  { courseId: 'course001', courseName: 'Business Administration', image: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FBusinessAdministraion_icon.png?alt=media&token=6fa08a0d-b544-497e-88f8-485ad646dd8e' },
  { courseId: 'course002', courseName: 'Data Science/Analytics and Machine Learning', image: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FDataScience_icons.png?alt=media&token=2a26e69e-25a5-4c47-a730-006d282f25b8' },
  { courseId: 'course003', courseName: 'Computer Science/IT', image: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FComputerScience_icon.png?alt=media&token=e5318a83-e1fc-4614-af2e-d917043841fb' }
];

function PopularCourses() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${homebg})` }} className='bg-cover bg-center bg-no-repeat'>
        <div>
          <div className="flex items-center mt-5">
            <div className="text-center mx-auto pt-5">
              <p className="mb-4 mt-10 pt-5 text-red-500 font-medium">POPULAR COURSES</p>
              <h1 className="mb-4 text-5xl font-semibold sm:text-lg md:text-3xl">Pick a course you like the most</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center mt-5 mx-auto text-center gap-10 items-center lg:ml-12 ml-8 mr-9'>
          {courses.map(course => (
            <Link key={course.courseId} to={`/coursedetail/${course.courseId}`} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
              <div className="relative max-w-100 mb-4 group">
                <img src={course.image} alt={course.courseName} className='rounded-xl shadow-xl w-full group-hover:blur-sm transition duration-300 ease-in-out' />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-xl">
                  <span className="text-white text-xl font-bold">{course.courseName}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/courses'>
          <Button outline size='lg' onClick={scrollToTop} gradientDuoTone="pinkToOrange" pill className='mx-auto justify-items-center mt-12 hover:scale-105' style={{ zIndex: 1, marginBottom: '60px' }}>
            Browse more Courses <HiArrowCircleRight size={25} />
          </Button>
        </Link>
        <div className='mx-auto pt-10 mb-10 relative p-2' style={{ maxWidth: '100%', width: '800px' }}>
          <img src={videoShape} alt="" className="hidden md:block absolute inset-0 w-full h-full rounded-3xl scale-150" style={{ zIndex: -1 }} />
          <img src={videoShape2} alt="" className="absolute -top-10 -right-12" style={{ zIndex: 2 }} />
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/fjvNz8u70bw?si=xP5LveJ-uiUa92xI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loop
            style={{ maxWidth: '100%', zIndex: 5 }}
            className='rounded-3xl shadow-xl'
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
