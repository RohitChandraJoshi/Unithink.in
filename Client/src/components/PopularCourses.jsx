import React, { useEffect, useRef, useState } from "react";
import { Button } from "flowbite-react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const courses = [
  {
    courseId: "course001",
    courseName: "Business Administration",
    image:
      "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FBusinessAdministraion_icon.png?alt=media&token=6fa08a0d-b544-497e-88f8-485ad646dd8e",
  },
  {
    courseId: "course003",
    courseName: "Computer Science/IT",
    image:
      "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FComputerScience_icon.png?alt=media&token=e5318a83-e1fc-4614-af2e-d917043841fb",
  },
  {
    courseId: "course004",
    courseName: "Law",
    image:
      "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Flaw_icon.png?alt=media&token=02d987b7-25b6-4e8d-9adb-14b129a83dc7",
  },
  {
    courseId: "course005",
    courseName: "Finance",
    image:
      "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Ffinance_icon.png?alt=media&token=283c174e-4890-4a22-8a32-501e7c8a990c",
  },
  {
    courseId: "course002",
    courseName: "Data Science/Analytics and Machine Learning",
    image:
      "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FDataScience_icons.png?alt=media&token=2a26e69e-25a5-4c47-a730-006d282f25b8",
  },
];

function PopularCourses() {
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
    <div className="popular-courses-container">
      <p className="text-center mt-10 pt-5 text-red-500 font-medium text-2xl">
        POPULAR COURSES
      </p>
      <h1 className="success-stories-heading ">
        Pick a course you like the most
      </h1>

      <div
        className="popular-courses-scroll"
        ref={scrollContainerRef}
        style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
      >
        {Array.from({ length: 5 }).map((_, repeatIndex) => (
          <React.Fragment key={repeatIndex}>
            {courses.map((course) => (
              <Link
                to={`/coursedetail/${course.courseId}`}
                className="course-card"
                key={course.courseId}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <img
                  src={course.image}
                  alt={course.courseName}
                  className="course-image"
                />
                <div className="course-overlay">
                  <span className="course-overlay-text">{course.courseName}</span>
                </div>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </div>

      <Link to="/courses">
        <Button
          outline
          size="lg"
          onClick={scrollToTop}
          gradientDuoTone="pinkToOrange"
          pill
          className="browse-more-button hover:scale-105"
          style={{ zIndex: 1 }}
        >
          Browse more Courses <HiArrowCircleRight size={25} />
        </Button>
      </Link>
    </div>
  );
}

export default PopularCourses;
