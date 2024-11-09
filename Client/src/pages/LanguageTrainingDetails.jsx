import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function LanguageTrainingDetails() {
  const { languageId } = useParams();
  const [trainingDetails, setTrainingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        const response = await axios.get(
          `https://unithink-backend.vercel.app/api/languagetrainingDetails/${languageId}`
        );
        setTrainingDetails(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Training details not found");
        } else {
          setError("Error fetching data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingDetails();
  }, [languageId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEnrollClick = () => {
    scrollToTop();
    navigate("/registration", {
      state: { courseName: trainingDetails.title },
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
      {/* <div className="mt-10">
        <Link
          to="https://wa.me/message/GIWSQYCHN67RD1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="fixed bottom-4 right-4 z-50 bg-green-500 text-white py-3 px-6 hover:bg-green-600 flex items-center rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Chat with Us!
          </button>
        </Link>
      </div> */}
      {trainingDetails ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{trainingDetails.title}</h1>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc list-inside mb-4">
              {trainingDetails.details.exam_structure.pattern.map(
                (highlight, index) => (
                  <li key={index} className="text-gray-800">
                    {highlight}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">About the Course</h2>
            <p className="text-gray-800 mb-2">
              {trainingDetails.details.about}
            </p>
            <p className="text-gray-800 mb-2">
              {trainingDetails.details.description}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Exam Structure</h2>
            {trainingDetails.details.exam_structure.pattern.map(
              (section, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-800">{section}</p>
                </div>
              )
            )}
            <p className="text-gray-800">
              <strong>Total Time:</strong>{" "}
              {trainingDetails.details.exam_structure.total_time}
            </p>
            <p className="text-gray-800">
              <strong>Nature of Exam:</strong>{" "}
              {trainingDetails.details.exam_structure.nature_of_exam}
            </p>
            <p className="text-gray-800">
              <strong>Total Scores:</strong>{" "}
              {trainingDetails.details.exam_structure.total_scores}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Other Details</h2>
            <p>
              <strong>Registration:</strong>{" "}
              {trainingDetails.details.other_details.registration}
            </p>
            <p>
              <strong>Test Fees:</strong>{" "}
              {trainingDetails.details.other_details.test_fees}
            </p>
            <p>
              <strong>Score Validity:</strong>{" "}
              {trainingDetails.details.other_details.score_validity}
            </p>
            <p>
              <strong>Score Reporting:</strong>{" "}
              {trainingDetails.details.other_details.score_reporting}
            </p>
            <p>
              <strong>Additional Reporting Fees:</strong>{" "}
              {trainingDetails.details.other_details.additional_reporting_fees}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Test Preparation</h2>
            <ul className="list-disc list-inside">
              {Object.entries(trainingDetails.details.test_prep).map(
                ([key, value], index) => (
                  <li key={index} className="text-gray-800">
                    {value}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <button
              className="bg-blue-500 text-white py-3 px-6 hover:bg-blue-700 rounded"
              onClick={handleEnrollClick}
            >
              {trainingDetails.details.enroll_now_button}
            </button>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default LanguageTrainingDetails;
