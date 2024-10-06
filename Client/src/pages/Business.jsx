import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../components/BookNow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import comingsoon from "../assets/comingsoon.jpg";
import { sendEmail } from "./EmailService";

const Business = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phonenumber: "",
    studyDestination: "",
    studyPlan: "",
    fundSource: "",
    studyLevel: "",
    agreeTerms: false,
    contactPreference: false,
    receiveUpdates: false,
  });
  const [successMessage, setSuccessMessage] = useState(null);
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
            ? prevStats.universitiesTied + 5
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

  return (
    <div>
      <ToastContainer />
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
      <div className="sttt">
        <h1 className="mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black relative flex flex-col items-center">
          <span className="mt-10">Education & Business Consultancy</span>
          <span className="relative mt-2">
            <span className="h-1 bg-orange-500 w-20 block"></span>
          </span>
        </h1>
      </div>
      <div className="discover">
        <p className="w-full lg:pb-3 lg:text-base text-[10px] pt-3 text-center text-gray-900">
          Take the first step towards a successful future. Schedule a free
          counselling session with us and start your journey towards achieving
          your education and career goals.
        </p>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 gap-10 lg:px-2 md:grid-cols-2 lg:grid-cols-3 text-center">
          <div className="border rounded-lg p-6 bg-gradient-to-r from-red-200 to-red-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-red-600">
              {statistics.coursesAvailable}+
            </h1>
            <p className="text-gray-700">Years of Career Counselling</p>
          </div>
          <div className="border rounded-lg p-6 bg-gradient-to-r from-green-200 to-green-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-green-600">
              {statistics.universitiesTied}+
            </h1>
            <p className="text-gray-700">Partner Universities</p>
          </div>
          <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-200 to-purple-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-purple-600">
              {statistics.satisfactionRate}+
            </h1>
            <p className="text-gray-700">Students and Executives Trained</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={comingsoon}
          alt="coming soon"
          className="p-10 justify-center"
        />
      </div>
    </div>
  );
};

export default Business;
