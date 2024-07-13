import React, { useState } from 'react';
import { Label, TextInput, Button, Select, Checkbox } from 'flowbite-react';
import axios from 'axios';
import { HiMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/Booking.css'; // Adjusted path to CSS file
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import boardmeet from '../assets/pexels-expressivestanley-1454360.jpg'; // Adjusted path to image file
import { Footer } from 'flowbite-react';
import { sendEmail } from './EmailService';

function Contact() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phonenumber: '',
    serviceType: '',
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
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };
  return (
    <div className="flex flex-col md:flex-row relative">
      <div className="mt-10">
        <Link to="https://wa.me/message/H6GTSW5G5WWTK1" target="_blank" rel="noopener noreferrer">
          <button className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
          </button>
        </Link>
      </div>
      <div className='background-image absolute inset-0 bg-cover bg-center pointer-events-none' style={{ backgroundImage: `url(${boardmeet})`, opacity: '0.5', backgroundBlendMode: 'multiply' }}></div>
      <div className="flex flex-col md:w-2/3 p-4">
        <div className="mx-auto text-center">
          <div className="sttt">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-black relative flex flex-col items-center mt-10">
              REQUEST FREE CONSULTATION
              <span className="relative mt-2">
                <span className="h-1 bg-orange-500 w-20 block"></span>
              </span>
            </h1>
          </div>
        </div>
        <div className="md:p-5 lg:p-8 mx-3 sm:mx-auto lg:mx-auto max-w-md md:max-w-lg lg:max-w-3xl mb-10" style={{ zIndex: '1' }}>
          <div className="discover">
            <p className="text-base md:text-lg text-center md:text-left">Book a session now! Don't worry, we won't charge you for anything...</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                type='tel'
                placeholder='Enter your phone number'
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
                <option value="">Select Service Type</option>
                <option value="Education & Career Counselling">Education & Career Counselling</option>
                <option value="Find Your University & Course">Find Your University & Course</option>
                <option value="Skilling Academy">Skilling Academy</option>
                <option value="Education & Business Counsultancy">Education & Business Counsultancy</option>
              </Select>
            </div>
            {/* Additional Checkboxes */}
            <div className="flex items-center">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agreeTerms" className="text-sm">
                I agree to UniThink Terms <a href="/terms" className="text-blue-500">UniThink Terms</a> and <a href="/privacypolicy" className="text-blue-500">privacy policy</a>
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
            <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>
                {loading ? 'Booking...' : 'Book Now!'}
              </Button>          </form>
        </div>
      </div>
      <div className="md:w-2/4 p-4" style={{ zIndex: '1' }}>
        <div className='contact-box'>
          <h2 className='font-bold'>GET IN TOUCH</h2>
          <p className="slogan">Connect with UniThink Education International for an initial consultation with our experts. We delve into the specifics of your situation to provide you with tailored solutions and present the best options available. Just a minute of your time is all it takes. Expect a prompt response as we prioritize your needs and strive to deliver excellence.</p>
          <div className="contact-details">
            <p style={{ fontWeight: 'bold' }}><HiOutlinePhone /> +9900911649 <br /> +9663514338 </p>
            <p><HiOutlineLocationMarker /> 305, Tropical Terrace, Basavanagar, <br /> Doddanekkundi, Bangalore North, Bangalore- <br /> 560037, Karnataka</p>
            <p style={{ fontWeight: 'bold' }}><HiMail /> info@unithink.in</p>
          </div>
          <div className="social-icons">
            <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />
          </div>
          <div className="map-container" style={{ marginTop: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62248.94683766569!2d77.61011610400727!3d12.95627084641321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e90e80ec43%3A0x24ff831fe145a8d6!2sBasavanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1686435601234!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
