import React from "react";
import aboutusperson from "../assets/aboutusperson.jpg";
import boardmeet from "../assets/about5.jpg";
import { Label, TextInput, Button, Select, Checkbox } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import service7 from "../assets/service7.png";
import service8 from "../assets/service8.png";
import service9 from "../assets/service9.png";
import service10 from "../assets/service10.png";
import who from "../assets/who.jpg";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import UEI from "../assets/UEI.png";
import { sendEmail } from "./EmailService";

function About() {
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
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      {/* top section */}
      <div className="mt-10">
        <Link
          to="https://wa.me/message/H6GTSW5G5WWTK1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
          </button>
        </Link>
      </div>
      <div className="relative max-w-full">
        <div
          style={{ backgroundImage: `url(${boardmeet})`, filter: "blur(8px)" }}
          className="p-20 md:p-80 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16 lg:mt-0 md:mt-20 mt-28 relative"
        >
          <div className="absolute inset-0"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="sttt">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-9xl text-black relative flex flex-col items-center">
              <span className="mb-1">About us</span>
              <span className="relative mt-2">
                <span className="h-1 mb-10 bg-orange-500 w-20 block"></span>
              </span>
            </h1>
          </div>
          <div className="discover"></div>
          <Link to="/booking">
            <Button
              size="xl"
              outline
              pill
              gradientDuoTone="pinkToOrange"
              className="text-xs lg:text-sm z-10"
              onClick={scrollToTop}
            >
              Meet us at
            </Button>
          </Link>
        </div>
      </div>

      {/* main content page */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            Who We Are
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/3">
              <img
                src={who}
                alt="Unithink Education International"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <p className="lg:text-2xl md:text-2xl text-xl text-center md:text-center text-neutral-800 font-medium leading-relaxed text-justify">
                Unithink Education International Pvt. Ltd. acts as your global
                education and career mentor, providing expert guidance in
                university selection, admissions, and support services on a
                worldwide scale. With over 22 years of experience in
                international education, we specialize in counseling, university
                pairing, application aid, visa support, scholarship assistance,
                and immigration guidance. Our vast database comprises 350+
                universities, and we extend our services to students across
                continents, covering countries such as the US, Canada, UK,
                Australia, France, Germany, Netherlands, UAE, Japan, and India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            Vision
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/3">
              <img
                src={vision}
                alt="Unithink Education International"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <p className="lg:text-2xl md:text-2xl text-xl text-center md:text-center text-neutral-800 font-medium leading-relaxed text-justify">
                Unithink Education International's vision is to serve as your
                lifelong global education companion and career mentor, guiding
                you through every stage of your educational journey and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            Mission
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/3">
              <img
                src={mission}
                alt="Unithink Education International"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <p className="lg:text-2xl md:text-2xl text-xl text-center md:text-center text-neutral-800 font-medium leading-relaxed text-justify">
                Unithink Education International is dedicated to empowering
                students globally through a range of educational support
                services. Our mission is to facilitate university selection,
                offer admissions assistance, and provide career guidance,
                enabling students to navigate the complexities of the education
                landscape confidently. We aim to equip students with the tools
                and resources they need to achieve their academic and
                professional aspirations, wherever they may be in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-10">
        {/* heading */}
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            UEI ENVISIONS
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-5">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/3">
              <img
                src={UEI}
                alt="Unithink Education International"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <ul className="w-full list-disc p-2">
                <li className="lg:text-2xl lg:text-lg text-sm text-neutral-700 font-medium">
                  <span className="font-bold">Global Leadership:</span> Being a
                  global leader in empowering individuals for unparalleled
                  career growth.
                </li>
                <li className="lg:text-2xl lg:text-lg text-sm text-neutral-700 font-medium">
                  <span className="font-bold">Seamless Integration:</span>{" "}
                  Seamlessly integrating tailored education choices with unique
                  cultural identities and personal aspirations.
                </li>
                <li className="lg:text-2xl lg:text-lg text-sm text-neutral-700 font-medium">
                  <span className="font-bold">
                    Executive Development Catalyst:
                  </span>{" "}
                  Catalyzing professionals at all levels for personal growth and
                  organizational success.
                </li>
                <li className="lg:text-2xl lg:text-lg text-sm text-neutral-700 font-medium">
                  <span className="font-bold">
                    Innovation and Transformation:
                  </span>{" "}
                  Leading continuous innovation and positive transformations in
                  education and business.
                </li>
                <li className="lg:text-2xl lg:text-lg text-sm text-neutral-700 font-medium">
                  <span className="font-bold">Collaborative Excellence:</span>{" "}
                  Creating a world where education and business collaborate
                  seamlessly, contributing to global excellence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="w-full mx-auto mt-10">
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            services offered
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Service Card */}
          {[
            {
              img: service1,
              title: "Career Guidance",
              description:
                "Offering personalized counseling to help students explore their interests, strengths, and potential career paths, guiding them towards fulfilling professional futures.",
            },
            {
              img: service2,
              title: "University Selection",
              description:
                "Assisting students in identifying the most suitable universities based on their academic background, interests, and career goals.",
            },
            {
              img: service3,
              title: "Admission Assistance",
              description:
                "Providing guidance and support throughout the university application process, including application strategy, documentation, and submission.",
            },
            {
              img: service4,
              title: "Visa Guidance",
              description:
                "Assisting students with visa application procedures, documentation requirements, and interview preparation to facilitate a smooth transition to their chosen study destination.",
            },
            {
              img: service5,
              title: "Scholarship Support",
              description:
                "Helping students explore scholarship opportunities and providing guidance on application procedures to secure financial assistance for their education.",
            },
            {
              img: service6,
              title: "Immigration Assistance",
              description:
                "Supporting students with immigration processes, including residency permits, work permits, and other legal requirements associated with studying abroad.",
            },
            {
              img: service7,
              title: "Test Preparation",
              description:
                "Offering resources and guidance for standardized tests such as the SAT, ACT, GRE, GMAT, TOEFL, and IELTS to help students achieve their desired scores.",
            },
            {
              img: service8,
              title: "Application Review",
              description:
                "Reviewing and providing feedback on students' application materials, including personal statements, essays, and resumes, to enhance their chances of acceptance.",
            },
            {
              img: service9,
              title: "Alumni Network",
              description:
                "Connecting students with alumni networks and resources to facilitate networking opportunities and career development.",
            },
            {
              img: service10,
              title: "Post-Admission Support",
              description:
                "Providing ongoing support to students even after admission, including orientation assistance, academic advising, and adjustment support.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-center text-lg font-semibold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-center text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 p-5 bg-gray-200 to-amber-100 border rounded-2xl shadow-lg lg:mx-96 md:mx-28 sm:mx-10 mb-10">
        <p className="text-lg text-center md:text-left">
          Book a session now! Dw! We won't charge you for anything...
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {" "}
          {/* Adjusted gap */}
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
              I agree to Unithink Terms{" "}
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
              Please contact me by phone, email or SMS to assist with my enquiry
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
  );
}

export default About;
