import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogDetails/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!blog) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  return (
    <div className="font-sans leading-relaxed">
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
      <header className="bg-gray-800 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        {blog.sections && blog.sections.length > 0 ? (
          blog.sections.map((section, index) => (
            <section key={index} className="mb-6">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                {section.heading}
              </h2>
              {section.content.map((content, idx) => (
                <p key={idx} className="mb-2">{content.text}</p>
              ))}
            </section>
          ))
        ) : (
          <p>No sections available for this blog.</p>
        )}
      </main>
      <footer className="text-center p-4 bg-gray-200 border-t border-gray-300">
        <p>
          Don’t hesitate to book a free Education & Career Counselling
          appointment with us today. Our experts are here to help you navigate
          your career journey with personalized advice and support.
        </p>
        <Link to="/booking">
          <button
            className="bg-black text-white py-3 px-6 hover:bg-red-500"
            onClick={scrollToTop}
          >
            Book Now!
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default BlogDetails;
