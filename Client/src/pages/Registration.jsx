import React, { useState } from "react";
import { TextInput, Button, Select, Checkbox, Label, Radio } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { sendRegistrationEmail } from "./RegistrationEmailSErvice";

const RegisterForm = () => {
  const location = useLocation();
  const courseName = location.state?.courseName || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phonenumber: "",
    course: courseName,
    courseMode: "",
    counsellingNeeded: "",
    highestQualification: "",
    agreeTerms: false,
    contactPreference: false,  // New state for contact preference
    receiveUpdates: false,     // New state for receiving updates
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.country ||
      !formData.phonenumber ||
      !formData.course ||
      !formData.courseMode ||
      !formData.counsellingNeeded ||
      !formData.highestQualification ||
      !formData.agreeTerms
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      await sendRegistrationEmail(formData); 

      setLoading(false);
      toast.success("Registration successful!");
      setFormData({
        name: "",
        email: "",
        country: "",
        phonenumber: "",
        course: "",
        courseMode: "",
        counsellingNeeded: "",
        highestQualification: "",
        agreeTerms: false,
        contactPreference: false,
        receiveUpdates: false,
      }
      
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      toast.error("Failed to submit registration. Please try again.");
    }
  };

  return (
    <div className="mt-10 p-5 bg-gray-200 to-amber-100 border rounded-2xl shadow-lg lg:mx-96 md:mx-28 sm:mx-10 mb-10">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 text-center">Register for {courseName}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Label value="Name*" />
          <TextInput
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label value="Email*" />
          <TextInput
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label value="Phone Number*" />
          <TextInput
            type="tel"
            id="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label value="Country*" />
          <TextInput
            type="text"
            id="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter your country"
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label value="Course*" />
          <TextInput
            type="text"
            id="course"
            value={formData.course}
            readOnly
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Label value="Previous Highest Qualification*" />
          <Select
            id="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            required
            className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select your highest qualification</option>
            <option value="High School">High School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </Select>
        </div>
        {/* Course Mode Radio Buttons */}
        
        <div>
          <Label value="Course Mode*" />
          <div className="flex items-center gap-4">
            <Radio
              id="online"
              name="courseMode"
              value="Online"
              checked={formData.courseMode === "Online"}
              onChange={handleRadioChange}
              required
            />
            <Label htmlFor="online">Online</Label>
            <Radio
              id="offline"
              name="courseMode"
              value="Offline"
              checked={formData.courseMode === "Offline"}
              onChange={handleRadioChange}
              required
            />
            <Label htmlFor="offline">Offline</Label>
          </div>
        </div>
        
        {/* Counselling Radio Buttons */}

        <div>
          <Label value="Do you need free counselling?" />
          <div className="flex items-center gap-4">
            <Radio
              id="counsellingYes"
              name="counsellingNeeded"
              value="Yes"
              checked={formData.counsellingNeeded === "Yes"}
              onChange={handleRadioChange}
              required
            />
            <Label htmlFor="counsellingYes">Yes</Label>
            <Radio
              id="counsellingNo"
              name="counsellingNeeded"
              value="No"
              checked={formData.counsellingNeeded === "No"}
              onChange={handleRadioChange}
              required
            />
            <Label htmlFor="counsellingNo">No</Label>
          </div>
        </div>
        {/* Terms and Conditions Checkbox */}
        <label htmlFor="receiveUpdates" className="text-sm">
            UniThink will not share your details with others without your
            permission:
          </label>
        <div className="flex items-center">
          <Checkbox
            id="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="agreeTerms" className="ml-2 text-sm">
            I agree to the 
            <a href="/terms" className="text-blue-500"> UniThink Terms </a> and 
            <a href="/privacypolicy" className="text-blue-500"> privacy policy</a>
          </label>
        </div>
        {/* Contact Preference Checkbox */}
        <div className="flex items-center">
          <Checkbox
            id="contactPreference"
            checked={formData.contactPreference}
            onChange={handleChange}
          />
          <label htmlFor="contactPreference" className="ml-2 text-sm">
            Please contact me by phone, email or SMS to assist with my enquiry
          </label>
        </div>
        {/* Receive Updates Checkbox */}
        <div className="flex items-center">
          <Checkbox
            id="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
          />
          <label htmlFor="receiveUpdates" className="ml-2 text-sm">
            I would like to receive updates and offers from UniThink
          </label>
        </div>
        <Button type="submit" gradientDuoTone="pinkToOrange" disabled={loading}>
          {loading ? "Submitting..." : "Register Now"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
