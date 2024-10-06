import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react"; // Assuming you're using Flowbite for styling
import { HiArrowCircleRight } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://unithink-backend.vercel.app/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",

        padding: "20px",
      }}
    >
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
      <div className="text-center mt-10">
        <h1 className="mb-4 font-bold text-3xl md:text-3xl lg:text-3xl text-black">
          BLOGS
        </h1>
        <div className="h-1 bg-orange-500 w-20 mx-auto mb-5"></div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="max-w-sm relative hover:scale-105 shadow-xl"
            imgSrc={blog.imageUrl}
          >
            <Link to={`/blog/${blog.id}`}>
              <Button
                pill
                gradientDuoTone="pinkToOrange"
                onClick={scrollToTop}
                outline
                className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"
              >
                <HiArrowCircleRight size={30} />
              </Button>
            </Link>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.shortDescription}
            </h5>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
