import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Blog2 = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="font-sans leading-relaxed">
      <header className="bg-gray-800 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">How Career Interest Inventories Can Help You Decide on a Suitable Career Path</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">1. Self-Discovery</h2>
          <p className="mb-2"><strong>Understanding Your Interests:</strong> Career interest inventories help you pinpoint the subjects and activities you are passionate about. Knowing what you enjoy can guide you toward careers that will be fulfilling and enjoyable.</p>
          <p className="mb-2"><strong>Recognize Your Strengths:</strong> These inventories often reveal your natural talents and strengths, which can be critical in choosing a career that suits you.</p>
          <p>Book a free Education & Career Counselling appointment with us to explore your interests and strengths in detail.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">2. Exploring Career Options</h2>
          <p className="mb-2"><strong>Matching Interests with Careers:</strong> Career interest inventories match your interests with various career options, providing a list of professions that align with your preferences. This can open up new possibilities you may not have considered.</p>
          <p className="mb-2"><strong>Industry Insights:</strong> They offer insights into different industries and roles, helping you understand the variety of options available and the specific requirements for each career.</p>
          <p>Schedule a free session with us to get personalized advice on how your interests align with different career paths.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">3. Goal Setting and Planning</h2>
          <p className="mb-2"><strong>Creating a Roadmap:</strong> By understanding the careers that match your interests, you can set realistic and achievable career goals. This clarity helps in planning your educational and professional journey effectively.</p>
          <p className="mb-2"><strong>Educational Guidance:</strong> Career interest inventories can suggest relevant courses, certifications, and degrees that will prepare you for your chosen career. This ensures that you invest your time and resources in the right education and training.</p>
          <p>Book a free Education & Career Counselling appointment to create a customized roadmap for your career.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">4. Confidence and Motivation</h2>
          <p className="mb-2"><strong>Building Confidence:</strong> Making career choices based on well-researched interest inventories can boost your confidence in your decisions. Knowing that your career path aligns with your interests can increase your motivation and commitment.</p>
          <p className="mb-2"><strong>Reduced Uncertainty:</strong> These tools reduce the uncertainty and anxiety often associated with career decisions, providing a clearer vision of your future.</p>
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

export default Blog2;
