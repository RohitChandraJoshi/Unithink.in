import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ImageModal({ imageSrc }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setIsOpen(false);

  const handleImageClick = () => {
    handleClose();
    navigate("coursedetail/course010"); // Update the path if needed
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative bg-white p-2 rounded-lg w-[90%] sm:w-[500px] h-auto max-h-screen overflow-auto">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            style={{ fontSize: "24px" }}
          >
            &times;
          </button>
          <img
            src={imageSrc}
            alt="Modal"
            className="w-[80%] sm:w-full max-w-full max-h-full cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
      </div>
    )
  );
}

export default ImageModal;
