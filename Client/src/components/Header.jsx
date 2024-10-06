import React, { useState, useEffect } from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Footer } from "flowbite-react";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const hardcodedCountries = [
    { c_id: "u007", c_name: "USA" },
    { c_id: "f004", c_name: "Germany" },
    { c_id: "u005", c_name: "UAE" },
    { c_id: "a001", c_name: "Australia" },
    { c_id: "c002", c_name: "Canada" },
    { c_id: "u006", c_name: "UK" },
    { c_id: "f003", c_name: "France" },
    { c_id: "u008", c_name: "Russia" },
    { c_id: "u009", c_name: "Switzerland" },
    { c_id: "u010", c_name: "India" },
  ];

  const courses = [
    { courseId: "course010", courseName: "Medicine" },
    { courseId: "course001", courseName: "Business Administration" },
    {
      courseId: "course002",
      courseName: "Data Science/Analytics and Machine Learning",
    },
    { courseId: "course003", courseName: "Computer Science/IT" },
    { courseId: "course004", courseName: "Engineering" },
    { courseId: "course005", courseName: "Economics" },
    { courseId: "course006", courseName: "Public Health" },
    { courseId: "course007", courseName: "Psychology" },
    { courseId: "course008", courseName: "Finance" },
    { courseId: "course009", courseName: "Law" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredCountries([]);
      setFilteredCourses([]);
    } else {
      const filteredCountries = hardcodedCountries.filter((country) =>
        country.c_name.toLowerCase().includes(query)
      );
      const filteredCourses = courses.filter((course) =>
        course.courseName.toLowerCase().includes(query)
      );
      setFilteredCountries(filteredCountries);
      setFilteredCourses(filteredCourses);
    }
  };

  const handleCountryClick = () => {
    setSearchQuery("");
    setFilteredCountries([]);
    setFilteredCourses([]);
    setIsNavbarOpen(false);
  };

  const handleCourseClick = () => {
    setSearchQuery("");
    setFilteredCountries([]);
    setFilteredCourses([]);
    setIsNavbarOpen(false);
  };

  return (
    <Navbar
      fluid
      rounded
      className={`top-0 w-full z-10 shadow-md ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-all duration-300`}
    >
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="mr-3 h-16 sm:h-14 md:h-16 lg:h-20"
          alt="Unithink"
        />
      </Navbar.Brand>
      <div className="flex items-center relative w-full max-w-xs mx-auto md:mx-0">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search countries or courses..."
          className="search-input w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {(filteredCountries.length > 0 || filteredCourses.length > 0) &&
          searchQuery !== "" && (
            <div className="search-results absolute top-full left-0 w-full bg-white shadow-lg z-10">
              {filteredCountries.map((country) => (
                <Link key={country.c_id} to={`/countrydetail/${country.c_id}`}>
                  <div
                    onClick={handleCountryClick}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {country.c_name}
                  </div>
                </Link>
              ))}
              {filteredCourses.map((course) => (
                <Link
                  key={course.courseId}
                  to={`/coursedetail/${course.courseId}`}
                >
                  <div
                    onClick={handleCourseClick}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {course.courseName}
                  </div>
                </Link>
              ))}
            </div>
          )}
      </div>
      <div className="flex items-center space-x-2 md:order-2">
        <Link to="/booking">
          <Button gradientDuoTone="pinkToOrange" outline pill>
            Get Started
          </Button>
        </Link>
        <Navbar.Toggle onClick={() => setIsNavbarOpen((prev) => !prev)} />
      </div>
      <Navbar.Collapse
        className={`md:flex md:w-auto ${isNavbarOpen ? "block" : "hidden"}`}
      >
        <Navbar.Link>
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/countries"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            Countries
          </Link>
        </Navbar.Link>
        <div className="relative md:flex md:items-center ml-3">
          <Dropdown label="Skilling" inline>
            <Dropdown.Item>
              <Link
                to="/courses"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-md"
                onClick={() => setIsNavbarOpen(false)}
              >
                Courses
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/languagetraining"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-md"
                onClick={() => setIsNavbarOpen(false)}
              >
                Language Training
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/skilling"
                className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-md"
                onClick={() => setIsNavbarOpen(false)}
              >
                Certifications
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <Navbar.Link>
          <Link
            to="/blogs"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            Blogs
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/faqs"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            FAQs
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 md:py-0"
          >
            Contact
          </Link>
        </Navbar.Link>
        <div className="social-icons_Header flex items-center space-x-2 mt-2 md:mt-0">
          <Footer.Icon
            href="https://www.linkedin.com/company/unithink-education-international/"
            target="_blank"
            rel="noopener noreferrer"
            icon={BsLinkedin}
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          />
          <Footer.Icon
            href="https://www.instagram.com/unithink_edu/"
            target="_blank"
            rel="noopener noreferrer"
            icon={BsInstagram}
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          />
          <Footer.Icon
            href="https://twitter.com/Unithink_Edu"
            target="_blank"
            rel="noopener noreferrer"
            icon={BsTwitter}
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
