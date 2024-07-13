import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
function CountryDetails() {
  const { countryid } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://unithink-backend.vercel.app/api/countryDetails/${countryid}`);
        setCountryDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country details:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryid]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {countryDetails && (
        <div>
          <h1 className="text-3xl font-bold mb-4">{countryDetails.c_name}</h1>
          
          <div className="mb-8">
            <img src={countryDetails.top_image} alt={countryDetails.c_name} className="w-full md:w-5/10 h-auto object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-gray-800">{countryDetails.about}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Country Details</h2>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">World Rank:</p>
              <p className="text-gray-800  w-1/2">{countryDetails.c_worldrank}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Number of Universities:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.num_uni}</p>
            </div>
            {/* <div className="mb-2">
              <p className="font-bold text-gray-700">About:</p>
              <p className="text-gray-800">{countryDetails.about}</p>
            </div> */}
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Average Tuition Fee:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.Average_tution_fee}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Number of International Students:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.num_stud_international}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Average Cost of Living:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.avg_cost_living}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Average Hostel Price:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.avg_hostel_price}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Visa Type:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.visa_type}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">Visa Processing Time:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.visa_processing_time}</p>
            </div>
            <div className="flex mb-2">
              <p className="font-bold text-gray-700 w-1/2">English Tests:</p>
              <p className="text-gray-800 w-1/2">{countryDetails.english_tests}</p>
            </div>
            <div className="mb-2">
              <p className="font-bold text-gray-700">Minimum English Scores:</p>
              <ul className="list-disc list-inside">
                {Object.entries(countryDetails.min_english_score).map(([test, score], index) => (
                  <li key={index} className="text-gray-800">{`${test}: ${score}`}</li>
                ))}
              </ul>
            </div>
          </div>


          {countryDetails.top_reasons && (
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl font-semibold mb-2">Top Reasons to Study in {countryDetails.c_name}</h2>
              <ul className="list-disc list-inside">
                {Object.values(countryDetails.top_reasons).map((reason, index) => (
                  <li key={index} className="text-gray-800 mb-2">{reason}</li>
                ))}
              </ul>
            </div>
          )}

          {countryDetails.uni_list && (
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl font-semibold mb-2">Universities in {countryDetails.c_name}</h2>
              <ul className="list-disc list-inside">
                {Object.values(countryDetails.uni_list).map((university, index) => (
                  <li key={index} className="text-gray-800 mb-2">{university}</li>
                ))}
              </ul>
            </div>
          )}
                    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-800 mb-2">{countryDetails.contact_info}</p>
            <Link to="/booking">
              <button className="bg-black text-white py-3 px-6 hover:bg-red-500" onClick={scrollToTop}>
                Book Now!
              </button>
            </Link>
          </div>

        </div>
      )}

      {!countryDetails && <p>No data available</p>}
    </div>
  );
}

export default CountryDetails;
