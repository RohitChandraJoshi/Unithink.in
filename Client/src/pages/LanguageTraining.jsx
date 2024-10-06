import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import star from "../assets/star.png";

function LanguageTraining() {
  const [languageTrainingCards, setLanguageTrainingCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://unithink-backend.vercel.app/api/languagetraining"
        );
        const responseData = response.data;
        setLanguageTrainingCards(responseData.languageTrainingCards);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",

        padding: "20px",
      }}
      className="px-4 md:px-8 bg-white"
    >
      <div className="text-center mt-10">
        <h1 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl text-black">
          UniThink: Your Pathway to Language Mastery
        </h1>
        <div className="h-1 bg-orange-500 w-20 mx-auto mb-5"></div>
        <p className="text-center text-gray-900 text-sm md:text-base">
          Unlock your potential with UniThink's language training. Whether
          preparing for global tests or personal growth, UniThink offers
          personalized training and expert guidance to help you succeed. Achieve
          your dreams with UniThink — your gateway to global education and
          career success!
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-32 h-32 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="mt-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {languageTrainingCards.map((card) => (
              <div
                key={card.languageId}
                className="flex flex-col justify-between bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:scale-105"
                style={{ width: "100%", maxWidth: "350px" }}
              >
                <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg">
                  <h5 className="text-lg md:text-xl font-bold">{card.name}</h5>
                </div>

                <div className="p-4">
                  <ul className="text-gray-600 text-sm md:text-base">
                    <li className="flex items-center mb-2">
                      <img src={star} alt="bullet" className="w-4 h-4 mr-2" />
                      {card.details.point1}
                    </li>
                    <li className="flex items-center mb-2">
                      <img src={star} alt="bullet" className="w-4 h-4 mr-2" />
                      {card.details.point2}
                    </li>
                    <li className="flex items-center mb-2">
                      <img src={star} alt="bullet" className="w-4 h-4 mr-2" />
                      {card.details.point3}
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-4">
                  <Link to={`/languagetrainingdetails/${card.languageId}`}>
                    <button className="text-orange-500 font-semibold hover:text-orange-700 focus:outline-none">
                      View More &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageTraining;
