import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import '../pages/CountryDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo.jpg'; // Ensure the correct path to the logo

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unithink-backend.vercel.app/api/country/');
        const responseData = response.data;
        setCountries(responseData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error); 
      }
    };
    fetchData();
  }, []);

  return (
    <div className='px-8 bg-white'>
      <div className="mt-10">
        <Link to='https://wa.me/message/H6GTSW5G5WWTK1' target="_blank" rel="noopener noreferrer">
          <button className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
          </button>
        </Link>
      </div>
      {loading ? ( // Render a loading indicator while loading
        <div className="flex justify-center items-center h-screen">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
      ) : (
        <>
          <div className="sttt">
            <h1 className='mb-4 font-bold text-3xl md:text-3xl lg:text-4xl text-black relative flex flex-col items-center'>
              <span className='mb-5 mt-10'>LIST OF COUNTRIES</span>
              <span className='relative mt-2'>
                <span className='mb-5 h-1 bg-orange-500 w-20 block'></span>
              </span>
            </h1>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
            {countries && countries.map((country) => (
              <div key={country._id} className="p-2 pb-10">
                <Link to={`/countrydetail/${country.c_id}`}>
                  <Card className="max-w-sm scale-110 hover:scale-105 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #f0f8ff, #e6f7ff)' }}>
                    <img src={country.top_image} alt={country.c_name} className="w-full h-48 object-cover" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                      {country.c_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                      {country.c_about}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                      <span className='font-bold'>World Rank:</span> {country.c_worldrank}
                    </p>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Countries;
