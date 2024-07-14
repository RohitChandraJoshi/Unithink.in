import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Blog1 = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="font-sans leading-relaxed">
      <header className="bg-gray-800 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Aligning Courses with Career Goals</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">1. Self-Assessment</h2>
          <p className="mb-2"><strong>Identify Your Interests and Strengths:</strong> Reflect on your interests and consider what subjects you enjoy and excel in. Your passion for a subject can often translate into a fulfilling career.</p>
          <p className="mb-2"><strong>Consider Your Career Goals:</strong> Define your career goals. If you're unsure, consider taking career assessment tests or speaking with a career counselor.</p>
          <p>Book a free Education & Career Counselling appointment with us to explore your interests and strengths in detail.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">2. Research and Information Gathering</h2>
          <p className="mb-2"><strong>Explore Course Options:</strong> Review course catalogs and seek advice from advisors. Academic advisors can provide valuable insights into which courses are best suited for your career goals.</p>
          <p className="mb-2"><strong>Investigate Future Opportunities:</strong> Research job listings in your field of interest to see what qualifications and skills are commonly required. Connect with professionals for advice.</p>
          <p>Schedule a free session with us to get personalized advice on how your interests align with different career paths.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">3. Strategic Planning</h2>
          <p className="mb-2"><strong>Create a Balanced Schedule:</strong> Ensure your course load includes a mix of core subjects and electives. Plan for prerequisites and balance challenging courses with those you find more manageable.</p>
          <p className="mb-2"><strong>Take Advantage of Opportunities:</strong> Enroll in specialized programs and participate in extracurricular activities related to your career goals.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">4. Continuous Evaluation</h2>
          <p className="mb-2"><strong>Regularly Review Your Plan:</strong> Stay flexible as your interests and goals may evolve. Seek feedback from mentors, teachers, and career counselors to ensure you are on the right track.</p>
          <p>Contact us to book a free session and gain the confidence you need to pursue a career that matches your interests.</p>
        </section>
      </main>
      <footer className="text-center p-4 bg-gray-200 border-t border-gray-300">
        <p>Don’t hesitate to book a free Education & Career Counselling appointment with us today. Our experts are here to help you navigate your career journey with personalized advice and support.</p>
        <Link to="/booking">
              <button className="bg-black text-white py-3 px-6 hover:bg-red-500" onClick={scrollToTop}>
                Book Now!
              </button>
            </Link>
      </footer>
    </div>
  );
};

export default Blog1;
