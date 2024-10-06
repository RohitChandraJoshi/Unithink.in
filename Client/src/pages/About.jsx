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

  const advisors = [
    {
      name: "Dr. Ranjith TP",
      title:
        "Head of Talent Acquisition-Volvo Group India | Former Director, Talent Acquisition Epsilon | Enabling Growth | Psychometric assessment specialist | Certified Career Mentor",
      image:
        "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/advisory%20photos%2FTP%20ranjith.jpeg?alt=media&token=942b271f-05a7-46b0-8ffc-9ca7e9784437",
    },
    {
      name: "Ravikumar V R",
      title:
        "Founder President of Karnataka Management Association | Former Dean at Acharya Institutes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/advisory%20photos%2Fravikumar%20v%20r%20.jpg?alt=media&token=3965574c-4929-435f-b89b-a377fbe35252",
    },
    {
      name: "Palash Gupta",
      title:
        "Product R&D, Engineering, Strategy | GCC Leader | Member NASSCOM Product Council at DeepTech | President PMI Bangalore | Board Member & Mentor Startup | Former DeepTech Startup Mentor at IIT Kanpur",
      image:
        "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/advisory%20photos%2Fpalash%20gupta.jpeg?alt=media&token=f6c9acd6-52c9-4ff8-8c68-fe635a210cb0",
    },
  ];

  return (
    <div>
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
      <div className="relative max-w-full">
        <div
          style={{ backgroundImage: `url(${boardmeet})`, filter: "blur(8px)" }}
          className="p-20 md:p-40 md:pr-52 bg-cover bg-center bg-no-repeat flex justify-center items-center pb-16 lg:mt-0 md:mt-20 mt-28 relative"
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
      <div className="w-full mx-auto mt-10 space-y-20">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 bg-gray-100 p-10">
            <h2 className="text-xl font-semibold uppercase text-gray-700 mb-4">
              Who We Are
            </h2>
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 leading-snug">
              Unithink Education International Pvt. Ltd.
            </h1>
            <p className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
              Unithink Education International Pvt. Ltd. is your global mentor
              for education and career guidance. With over 22 years of
              experience, we specialize in university selection, admissions,
              visa support, scholarships, and immigration guidance. We partner
              with 350+ universities worldwide, serving students across the US,
              Canada, UK, Australia, and more.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={who}
              alt="Unithink Education International"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={vision}
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 bg-gray-100 p-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 leading-snug">
              Our Vision for the Future
            </h1>
            <p className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
              Unithink Education International's vision is to serve as your
              lifelong global education companion and career mentor, guiding you
              through every stage of your educational journey and professional
              development.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 bg-gray-100 p-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 leading-snug">
              Our Mission Statement
            </h1>
            <p className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
              Unithink Education International is dedicated to empowering
              students globally through a range of educational support services.
              Our mission is to facilitate university selection, offer
              admissions assistance, and provide career guidance, enabling
              students to navigate the complexities of the education landscape
              confidently. We aim to equip students with the tools and resources
              they need to achieve their academic and professional aspirations,
              wherever they may be in the world.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src={mission}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={UEI}
              alt="UEI Envisions"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 bg-gray-100 p-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 leading-snug">
              Our Envisioned Future
            </h1>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Global Leadership:</span> Being a
                global leader in empowering individuals for unparalleled career
                growth.
              </li>
              <li className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Seamless Integration:</span>{" "}
                Integrating tailored education choices with unique cultural
                identities and personal aspirations.
              </li>
              <li className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">
                  Executive Development Catalyst:
                </span>{" "}
                Catalyzing professionals at all levels for personal growth and
                organizational success.
              </li>
              <li className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">
                  Innovation and Transformation:
                </span>{" "}
                Leading continuous innovation and positive transformations in
                education and business.
              </li>
              <li className="mt-6 lg:text-2xl md:text-xl text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">Collaborative Excellence:</span>{" "}
                Creating a world where education and business collaborate
                seamlessly, contributing to global excellence.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#CFD9DF",
          backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",

          padding: "20px",
        }}
        className="mx-auto py-100 px-100 max-w-full"
      >
        <div className="border-b border-black mx-auto">
          <h1 className="uppercase lg:text-7xl md:text-5xl text-3xl text-center lg:p-4 p-2">
            Meet Our Advisory Board
          </h1>
        </div>
        {advisors.map((advisor, index) => (
          <div
            key={advisor.name}
            className={`ml-10 flex flex-col md:flex-row items-start justify-start my-8 `}
          >
            <div className="">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-[400px] h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 p-2 text-left">
              <h2 className="text-4xl font-semibold mb-2">{advisor.name}</h2>
              <p className="text-lg text-gray-600">{advisor.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mx-auto mt-10">
        <div className="w-1/2 border-b border-black mx-auto">
          <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl text-center lg:p-4 p-2">
            services offered
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
