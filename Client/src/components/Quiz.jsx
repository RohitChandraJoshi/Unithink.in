import React, { useState } from 'react';
import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

const quizQuestions = [

  {
    question: "The Great Wall of China is visible from space.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Australia is both a country and a continent.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The Amazon Rainforest produces 20% of the world's oxygen.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Mount Everest is located in Nepal.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "TThe currency of Japan is the Yuan.",
    options: ["True", "False"],
    answer: "False"
  },
  // {
  //   question: "True or False: Africa is the largest continent by land area.",
  //   options: ["True", "False"],
  //   answer: "False"
  // },
  // {
  //   question: "True or False: The Sahara Desert is the largest desert in the world.",
  //   options: ["True", "False"],
  //   answer: "False"
  // },
  // {
  //   question: "True or False: The United States declared its independence in 1776.",
  //   options: ["True", "False"],
  //   answer: "True"
  // },
  // {
  //   question: "True or False: There are 7 continents in the world.",
  //   options: ["True", "False"],
  //   answer: "True"
  // },
  {
    question: "Which country has the most natural lakes?",
    options: ["A. Canada", "B. Brazil", "C. Russia", "D. United States"],
    answer: "A. Canada"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
    answer: "C. Canberra"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["A. China", "B. Japan", "C. Thailand", "D. South Korea"],
    answer: "B. Japan"
  },
  {
    question: "Which is the smallest country in the world by land area?",
    options: ["A. Monaco", "B. Vatican City", "C. San Marino", "D. Liechtenstein"],
    answer: "B. Vatican City"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["A. 1905", "B. 1910", "C. 1912", "D. 1915"],
    answer: "C. 1912"
  },
  // {
  //   question: "Which river is the longest in the world?",
  //   options: ["A. Amazon River", "B. Nile River", "C. Yangtze River", "D. Mississippi River"],
  //   answer: "B. Nile River"
  // },
  // {
  //   question: "Which planet is known as the Red Planet?",
  //   options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
  //   answer: "B. Mars"
  // },
  // {
  //   question: "What is the tallest mountain in the world?",
  //   options: ["A. K2", "B. Kangchenjunga", "C. Mount Everest", "D. Lhotse"],
  //   answer: "C. Mount Everest"
  // },
  // {
  //   question: "Which ocean is the largest by surface area?",
  //   options: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
  //   answer: "D. Pacific Ocean"
  // },
  // {
  //   question: "Which country is known for the Eiffel Tower?",
  //   options: ["A. Germany", "B. Italy", "C. France", "D. Spain"],
  //   answer: "C. France"
  // },
  // {
  //   question: "Which city is known as the Big Apple?",
  //   options: ["A. Los Angeles", "B. New York City", "C. Chicago", "D. San Francisco"],
  //   answer: "B. New York City"
  // },
  // {
  //   question: "What is the most widely spoken language in the world?",
  //   options: ["A. Spanish", "B. English", "C. Mandarin Chinese", "D. Hindi"],
  //   answer: "C. Mandarin Chinese"
  // },
  // {
  //   question: "Which continent is the Sahara Desert located on?",
  //   options: ["A. Asia", "B. South America", "C. Africa", "D. Australia"],
  //   answer: "C. Africa"
  // },
  // {
  //   question: "What is the largest island in the world?",
  //   options: ["A. Greenland", "B. New Guinea", "C. Borneo", "D. Madagascar"],
  //   answer: "A. Greenland"
  // },
  // {
  //   question: "Which country is known for the kangaroo?",
  //   options: ["A. India", "B. South Africa", "C. Australia", "D. Brazil"],
  //   answer: "C. Australia"
  // },
  // {
  //   question: "What is the capital of Canada?",
  //   options: ["A. Toronto", "B. Vancouver", "C. Ottawa", "D. Montreal"],
  //   answer: "C. Ottawa"
  // },
  // {
  //   question: "Which country has the most populous city in the world?",
  //   options: ["A. India", "B. China", "C. Japan", "D. United States"],
  //   answer: "C. Japan (Tokyo)"
  // },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestionIndex].answer) {
      setFeedback('Correct!');
      setScore(score + 1);
    } else {
      setFeedback('Incorrect');
    }
  };

  const handleNextQuestion = () => {
    setFeedback('');
    setSelectedOption('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= quizQuestions.length) {
    return (
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-lg mx-auto text-center">
      
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-lg">Your score: {score} / {quizQuestions.length}</p>
      </div>
    );
  }

  const { question, options } = quizQuestions[currentQuestionIndex];

  return (
    <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-lg mx-auto">
        <p className="mb-5 text-gray-400 font-semibold">Test Your World Knowledge</p>
      <h5 className="text-lg font-bold">{question}</h5>
      <ul className="mt-4">
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              className={`px-4 py-2 rounded-lg w-full text-left ${
                selectedOption === option
                  ? option === quizQuestions[currentQuestionIndex].answer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={!!selectedOption} // Disable button after selection
            >
              {option}
              {selectedOption === option && (
                option === quizQuestions[currentQuestionIndex].answer
                  ? <BsEmojiSmile className="inline ml-2" />
                  : <BsEmojiFrown className="inline ml-2" />
              )}
            </button>
          </li>
        ))}
      </ul>
      {feedback && <p className="mt-4">{feedback}</p>}
      {selectedOption && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
