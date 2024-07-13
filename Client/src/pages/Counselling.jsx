import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, TextInput, Button, Select, Checkbox, Card } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import '../components/BookNow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
import { sendEmail } from './EmailService';

const Counselling = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        phonenumber: '',
        studyDestination: '',
        studyPlan: '',
        fundSource: '',
        studyLevel: '',
        agreeTerms: false,
        contactPreference: false,
        receiveUpdates: false
    });
    const [successMessage, setSuccessMessage] = useState(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form data:', formData); // Check if formData is correctly populated
      try {
        setLoading(true);
        const response = await axios.post('https://unithink-backend.vercel.app/api/consultation/', formData);
        console.log('Response from backend:', response.data); // Log response for debugging
        
        await sendEmail(formData); // Send email using emailjs
  
        setLoading(false);
        setSuccessMessage('Form submitted successfully!');
        toast.success('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          country: '',
          phonenumber: '',
          serviceType: '',
          agreeTerms: false,
          contactPreference: false,
          receiveUpdates: false
        });
        setErrorMessage(null);
      } catch (error) {
        console.error('Error sending data:', error); // Log error for debugging
        setLoading(false);
        setErrorMessage('Failed to submit form. Please try again later.');
        toast.error('Failed to submit form. Please try again later.');
      }
    };
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.id]: value });
    };
    const [statistics, setStatistics] = useState({
        universitiesTied: 0,
        coursesAvailable: 0,
        satisfactionRate: 0,
        visaAcceptance: 0
    });
    useEffect(() => {
        const interval = setInterval(() => {
            // Update statistics with increasing count
            setStatistics(prevStats => ({
                ...prevStats,
                universitiesTied: prevStats.universitiesTied < 1500 ? prevStats.universitiesTied + 20 : 1500,
                coursesAvailable: prevStats.coursesAvailable < 25 ? prevStats.coursesAvailable + 1 : 25,
                satisfactionRate: prevStats.satisfactionRate < 2500 ? prevStats.satisfactionRate + 30 : 2500,
                visaAcceptance: prevStats.visaAcceptance < 98 ? prevStats.visaAcceptance + 1 : 98
            }));
        }, 10);

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

  return (
    <div>
              <div className="mt-10">
                            <Link to='https://wa.me/message/H6GTSW5G5WWTK1' target="_blank" rel="noopener noreferrer" >
        <button
            className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg"
            
        >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
        </button>
    </Link>
                            </div>
        <div className="sttt">
              <h1 className='mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black relative flex flex-col items-center'>
                <span className='text-center mt-10'>Achieve Your Dreams: Free Education & Career Counselling</span>
                <span className='relative mt-2'>
                  <span className='h-1 bg-orange-500 w-20 block'></span>
                </span>
              </h1>
            </div>
            <div className="discover">
            <p className="w-full  lg:pb-3 lg:text-base text-[10px] pt-3 text-center text-gray-900">        Take the first step towards a successful future. Schedule a free counselling session with us and start your journey towards achieving your education and career goals.
</p>
          </div>
          <div className="container mx-auto flex justify-center">
  <div className="grid grid-cols-1 gap-10 lg:px-2 md:grid-cols-2 lg:grid-cols-3 text-center">
    <div className="border rounded-lg p-6 bg-gradient-to-r from-red-200 to-red-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-red-600">{statistics.coursesAvailable}+</h1>
      <p className="text-gray-700">Years of Career Counselling</p>
    </div>
    <div className="border rounded-lg p-6 bg-gradient-to-r from-green-200 to-green-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-green-600">{statistics.universitiesTied}+</h1>
      <p className="text-gray-700">Partner Universities</p>
    </div>
    <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-200 to-purple-100 shadow-md w-50 h-30 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-purple-600">{statistics.satisfactionRate}+</h1>
      <p className="text-gray-700">Students and Executives Trained</p>
    </div>
  </div>
</div>
<div className="flex justify-center items-center min-h-screen">
<div className="lg:w-2/4 w-full flex flex-col justify-top items-center  md:mx-4 px-2 mx-auto">
                    <div className='p-5 bg-gray-200 border rounded-2xl shadow-lg shadow-2xl mb-4'>
                            <p className='text-lg text-center md:text-left'>Book a session now! Don't worry! We won't charge you for anything...</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3"> {/* Adjusted gap */}
                                <div>
                                    <Label value='Name*' />
                                    <TextInput
                                        type='text'
                                        placeholder='Enter your name'
                                        id='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Email*' />
                                    <TextInput
                                        type='email'
                                        placeholder='Enter your email'
                                        id='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        rightIcon={HiMail}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Phone*' />
                                    <TextInput
                                        type='number'
                                        placeholder='Enter your number'
                                        id='phonenumber'
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <Label value='Country*' />
                                    <TextInput
                                      type='text'
                                      placeholder='Enter your country'
                                      id='country'
                                      value={formData.country}
                                      onChange={handleChange}
                                      className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                  </div>
                                <div>
                                    <Label value='Service Type*' />
                                    <Select
                                        id="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                         <option value="Education & Career Counselling">Education & Career Counselling</option>
                        
                                       
                                        <option value="Find Your University & Course ">Find Your University & Course </option>
                                        <option value="Skilling Academy ">Skilling Academy </option>
                                        <option value="Education & Business Counsultancy">Education & Business Counsultancy</option>
                                      
                                        
                                    </Select>
                                </div>
                                {/* <div>
                                    <Label value='When do you plan to study*' />
                                    <Select
                                        id="studyPlan"
                                        value={formData.studyPlan}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Plan</option>
                                        
                                    </Select>
                                </div> */}
                                {/* <div>
                                    <Label value='How would you fund your education?*' />
                                    <Select
                                        id="fundSource"
                                        value={formData.fundSource}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Fund Source</option>
                                        <option value="Self Funded">Self Funded</option>
                                        <option value="Parents">Parents</option>
                                        <option value="Seeking Scholarship">Seeking Scholarship</option>
                                        <option value="Bank Loan">Bank Loan</option>
                                    </Select>
                                </div> */}
                                {/* <div>
                                    <Label htmlFor="studyLevel" value="Preferred Study Level*" />
                                    <Select
                                        id="studyLevel"
                                        value={formData.studyLevel}
                                        onChange={handleChange}
                                        required
                                        className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select Study Level</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Vocational">Vocational</option>
                                        <option value="Doctorate">Doctorate</option>
                                    </Select>
                                </div> */}
                                {/* Additional Checkboxes */}
                                <label htmlFor="receiveUpdates" className="text-sm">
                                    UniThink will not share your details with others without your permission:
                                </label>
                                <div className="flex items-center">
                                    <Checkbox
                                        id="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="agreeTerms" className="text-sm">
                                        I agree to Unithink Terms<a href="/terms" className="text-blue-500">UniThink Terms</a> and <a href="/privacypolicy" className="text-blue-500">privacy policy</a>
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
                                <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>{loading ? 'Booking...' : 'Book Now!'}</Button>
                            </form>
                        </div>
                        
                        
                    </div>
                    
                    </div>
                    <div className="w-full mx-auto mb-20">
        <div className="w-1/4 border-b border-black mx-auto">
          <h1 className=" uppercase lg:text-4xl md:text-4xl text-2xl text-center lg:p-4 p-2">services offered</h1>
        </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> 
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service1} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Career Guidance</h2>
                      <p className="text-sm text-gray-200">Offering personalized counseling to help students explore their interests, strengths, and potential career paths, guiding them towards fulfilling professional futures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service2} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">University Selection</h2>
                      <p className="text-sm text-gray-200">Assisting students in identifying the most suitable universities based on their academic background, interests, and career goals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service3} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Admission Assistance</h2>
                      <p className="text-sm text-gray-200">Providing guidance and support throughout the university application process, including application strategy, documentation, and submission.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service4} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Visa Guidance</h2>
                      <p className="text-sm text-gray-200">Assisting students with visa application procedures, documentation requirements, and interview preparation to facilitate a smooth transition to their chosen study destination.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service5} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Scholarship Support</h2>
                      <p className="text-sm text-gray-200">Helping students explore scholarship opportunities and providing guidance on application procedures to secure financial assistance for their education.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service6} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Immigration Assistance</h2>
                      <p className="text-sm text-gray-200">Supporting students with immigration processes, including residency permits, work permits, and other legal requirements associated with studying abroad.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service7} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Test Preparation</h2>
                      <p className="text-sm text-gray-200">Offering resources and guidance for standardized tests such as the SAT, ACT, GRE, GMAT, TOEFL, and IELTS to help students achieve their desired scores.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service8} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Application Review</h2>
                      <p className="text-sm text-gray-200">Reviewing and providing feedback on students' application materials, including personal statements, essays, and resumes, to enhance their chances of acceptance.</p>
                    </div>
                  </div>
                </div>
              </div>

             
              {/* Service 2 */}
              {/* Add other service cards similarly */}
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service9} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Alumni Network</h2>
                      <p className="text-sm text-gray-200">Connecting students with alumni networks and resources to facilitate networking opportunities and career development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={service10} alt="Service 1" className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h2 className="text-lg font-semibold">Post-Admission Support</h2>
                      <p className="text-sm text-gray-200">Providing ongoing support to students even after admission, including orientation assistance, academic advising, and adjustment support.</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
      </div>           
    </div>
  );
};

export default Counselling;
