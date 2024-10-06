import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Label,
  TextInput,
  Button,
  Select,
  Checkbox,
  Card,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import heroimage from "../assets/fronback.png";
import Booking from "../pages/Booking";
import "../components/BookNow.css";
import Counselling from "../assets/counselling.jpg";
import skills from "../assets/skills.jpg";
import business from "../assets/business.jpg";
import university from "../assets/university.jpg";
import unithink from "../assets/UniThink.png";
import boundless from "../assets/Boundless.png";
import rethink from "../assets/ReThink.png";
import student from "../assets/student.png";
import student1 from "../assets/student1.png";
import { HiArrowCircleRight } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { sendEmail } from "../pages/EmailService";
import ImageModal from "./ImageModel";
import popupImage from "../assets/popup.jpg";
function BookNow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    country: "",
    agreeTerms: false,
    contactPreference: false,
    receiveUpdates: false,
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [statistics, setStatistics] = useState({
    universitiesTied: 0,
    coursesAvailable: 0,
    satisfactionRate: 0,
    visaAcceptance: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics((prevStats) => ({
        ...prevStats,
        universitiesTied:
          prevStats.universitiesTied < 815
            ? prevStats.universitiesTied + 10
            : 815,
        coursesAvailable:
          prevStats.coursesAvailable < 25 ? prevStats.coursesAvailable + 1 : 25,
        satisfactionRate:
          prevStats.satisfactionRate < 2500
            ? prevStats.satisfactionRate + 30
            : 2500,
        visaAcceptance:
          prevStats.visaAcceptance < 98 ? prevStats.visaAcceptance + 1 : 98,
      }));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://unithink-backend.vercel.app/api/consultation/",
        formData
      );
      console.log("Response from backend:", response.data);

      await sendEmail(formData);

      setLoading(false);
      setSuccessMessage("Form submitted successfully!");
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        country: "",
        phonenumber: "",
        serviceType: "",
        agreeTerms: false,
        contactPreference: false,
        receiveUpdates: false,
      });
      setErrorMessage(null);
    } catch (error) {
      console.error("Error sending data:", error);
      setLoading(false);
      setErrorMessage("Failed to submit form. Please try again later.");
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
  };

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",

        padding: "20px",
      }}
      className=""
    >
      <div className="relative">
        <img
          src={student1}
          alt="UniThink and Boundless Learning"
          className="absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 max-w-xs md:max-w-full hidden lg:block"
        />
      </div>

      <div className="mx-auto max-w-[1600px]">
        {/* <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${heroimage})` }}
        ></div> */}
        <div className="mx-auto lg:flex">
          <div className="lg:w-3/3 w-full flex flex-col justify-top lg:mx-0 md:mx-4 px-4 pb-3">
            <div className="">
              <div className="mt-5">
                <div className="study ">
                  <img
                    src={rethink}
                    alt="UniThink and Boundless Learning"
                    style={{ width: "300px", height: "auto" }}
                  />
                </div>
              </div>
              <div className="sttt">
                <div className="mt-4">
                  <img
                    src={unithink}
                    alt="UniThink and Boundless Learning"
                    style={{ width: "350px", height: "auto" }}
                  />
                </div>
                <div className="study">
                  <div className="mt-3 ">
                    <img
                      src={boundless}
                      alt="UniThink and Boundless Learning"
                      style={{ width: "550px", height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="discovery">
                  <p className="text-[#737373] lg:text-xl">
                    Your lifelong passport to global education and career
                    success
                  </p>
                  {/* <p className="text-[#737373] lg:text-xl">
                                        From Mumbai to Massachusetts: Your personalized journey to prestigious universities.
                                    </p> */}
                </div>
              </div>
              <div className="mt-10">
                <Link to="/booking" element={<Booking />}>
                  <Button
                    className="bg-black text-white py-3 px-6 hover:bg-red-500"
                    onClick={scrollToTop}
                  >
                    Book Now!
                  </Button>
                </Link>
              </div>

              <div className="mt-10">
                <Link
                  to="https://wa.me/message/GIWSQYCHN67RD1 "
                  target="_blank"
                  rel="noopener noreferrer"
                  element={<Booking />}
                >
                  <button
                    className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg"
                    onClick={scrollToTop}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                    Chat with Us!
                  </button>
                </Link>
                <div className="bg-[#F0F4F6]">
                  <ImageModal imageSrc={popupImage} />
                </div>
              </div>
              <div className="h-auto flex justify-center mb-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-center w-full px-4">
                  <div className="z-10 border rounded-[20px] p-6 bg-gradient-to-r from-red-200 to-red-100 shadow-md w-full max-w-[100%] md:max-w-[250px] h-[150px] flex flex-col justify-center items-center mx-auto mb-4 md:mb-0">
                    <h1 className="font-bold text-3xl text-red-600">
                      {statistics.coursesAvailable}+
                    </h1>
                    <p className="text-gray-700">Years of Career Counselling</p>
                  </div>

                  <div className="z-10 border rounded-[20px] p-6 bg-gradient-to-r from-green-200 to-red-100 shadow-md w-full max-w-[100%] md:max-w-[250px] h-[150px] flex flex-col justify-center items-center mx-auto mb-4 md:mb-0">
                    <h1 className="font-bold text-3xl text-green-600">
                      {statistics.universitiesTied}+
                    </h1>
                    <p className="text-gray-700">Partner Universities</p>
                  </div>

                  <div className="z-10 border rounded-[20px] p-6 bg-gradient-to-r from-purple-200 to-red-100 shadow-md w-full max-w-[100%] md:max-w-[250px] h-[150px] flex flex-col justify-center items-center mx-auto">
                    <h1 className="font-bold text-3xl text-purple-600">
                      {statistics.satisfactionRate}+
                    </h1>
                    <p className="text-gray-700">
                      Students and Executives Trained
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side form */}
          <div className="z-10 lg:w-[800px] w-full flex-col justify-top mt-8 mr-10 md:mx-4 px-2">
            {" "}
            <div className="z-10 p-5 bg-gray-200 border rounded-2xl shadow-lg shadow-2xl mb-4">
              <p className="z-10 text-lg justify-center text-center md:text-left">
                Book Free Counselling & Guidance
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {" "}
                <div>
                  <Label value="Name*" />
                  <TextInput
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label value="Email*" />
                  <TextInput
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    rightIcon={HiMail}
                    className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label value="Phone*" />
                  <TextInput
                    type="number"
                    placeholder="Enter your number"
                    id="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label value="Country*" />
                  <TextInput
                    type="text"
                    placeholder="Enter your country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label value="Service Type*" />
                  <Select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select Service Type</option>
                    <option value="Education & Career Counselling">
                      Education & Career Counselling
                    </option>
                    <option value="Find Your University & Course ">
                      Find Your University & Course{" "}
                    </option>
                    <option value="Skilling Academy ">Skilling Academy </option>
                    <option value="Education & Business Counsultancy">
                      Education & Business Counsultancy
                    </option>
                  </Select>
                </div>
                <label htmlFor="receiveUpdates" className="text-sm">
                  UniThink will not share your details with others without your
                  permission:
                </label>
                <div className="flex items-center">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="agreeTerms" className="text-sm">
                    I agree to Unithink Terms
                    <a href="/terms" className="text-blue-500">
                      UniThink Terms
                    </a>{" "}
                    and{" "}
                    <a href="/privacypolicy" className="text-blue-500">
                      privacy policy
                    </a>
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="contactPreference"
                    checked={formData.contactPreference}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="contactPreference" className="text-sm">
                    Please contact me by phone, email or SMS to assist with my
                    enquiry
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="receiveUpdates" className="text-sm">
                    I would like to receive updates and offers from UniThink
                  </label>
                </div>
                {/* End of Additional Checkboxes */}
                <Button
                  gradientDuoTone="pinkToOrange"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Book Now!"}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card
              className="max-w-sm relative hover:scale-105 shadow-xl "
              imgSrc={Counselling}
            >
              <Link to="/counselling">
                <Button
                  pill
                  gradientDuoTone="pinkToOrange"
                  onClick={scrollToTop}
                  outline
                  className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"
                >
                  <HiArrowCircleRight size={30} />
                  Book Now!
                </Button>
              </Link>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                Education & Career Counselling
              </h5>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Understand the factors to consider when selecting a study destination that aligns with your academic, cultural, and personal preferences.
                            </p> */}
            </Card>
            <Card
              className="max-w-sm relative hover:scale-105 shadow-xl "
              imgSrc={university}
            >
              <Link to="/university">
                <Button
                  pill
                  gradientDuoTone="pinkToOrange"
                  onClick={scrollToTop}
                  outline
                  className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"
                >
                  <HiArrowCircleRight size={30} />
                  Book Now!
                </Button>
              </Link>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                Find Your University & Course
              </h5>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Address concerns such as cultural adjustment, homesickness, language barriers, and academic differences, and discover strategies for overcoming these challenges.
                            </p> */}
            </Card>
            <Card
              className="max-w-sm relative hover:scale-105 shadow-xl "
              imgSrc={skills}
            >
              <Link to="/skilling">
                <Button
                  pill
                  gradientDuoTone="pinkToOrange"
                  onClick={scrollToTop}
                  outline
                  className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"
                >
                  <HiArrowCircleRight size={30} />
                  Book Now!
                </Button>
              </Link>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                Skilling Academy
              </h5>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Learn about resources such as international student advisors, language support, housing assistance, and student organizations offered by universities abroad.
                            </p> */}
            </Card>
            <Card
              className="max-w-sm relative hover:scale-105 shadow-xl "
              imgSrc={business}
            >
              <Link to="/business">
                <Button
                  pill
                  gradientDuoTone="pinkToOrange"
                  onClick={scrollToTop}
                  outline
                  className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"
                >
                  <HiArrowCircleRight size={30} />
                  Book Now!
                </Button>
              </Link>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                Education & Business Counsultancy
              </h5>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                            Learn about resources such as international student advisors, language support, housing assistance, and student organizations offered by universities abroad.
                            </p> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
