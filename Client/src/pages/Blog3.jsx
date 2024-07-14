import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Blog3 = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="font-sans leading-relaxed">
      <header className="bg-gray-800 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">10 Tips To Improve Your Career Development</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <section className="mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 1</h2>
            <p className="mt-2"><strong>Set regular goals:</strong> Setting short-term goals is essential since it takes time to develop the skills and experience needed for success. Keep a journal, planner, or virtual calendar to record your progress and experiences.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 2</h2>
            <p className="mt-2"><strong>Get feedback:</strong> Once you gain experience in your field, ask your managers and coworkers for feedback so you can understand your strengths and areas for improvement. Talk with your manager about your career development during performance reviews.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 3</h2>
            <p className="mt-2"><strong>Get in touch with your network:</strong> Take advantage of the resources and connections you have at your disposal. Keeping an active presence in your industry can enable you to discover job opportunities, maintain long-term professional relationships, and stay up-to-date on industry trends.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 4</h2>
            <p className="mt-2"><strong>Utilize the company's resources:</strong> Employees at many companies and organizations have access to a variety of educational resources and learning opportunities to improve their skills. To advance your career within the company, your employer may offer management training programs.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 5</h2>
            <p className="mt-2"><strong>Take the challenge:</strong> To improve your career, you need time, commitment, and motivation. Experiment with skills and ideas beyond your area of expertise. Push yourself out of your comfort zone.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 6</h2>
            <p className="mt-2"><strong>Keep reading:</strong> Keep up to date on your industry's competitors, new products and services by reading frequently about it. You can find industry-related information in trade papers, magazines, news sites, and blogs. Be curious about your industry.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 7</h2>
            <p className="mt-2"><strong>Explore professional opportunities:</strong> Explore the professional opportunities available in your industry as this can allow you to explore alternative career options and expand your network of connections. Communicate with your coworkers and network to learn about conferences, workshops, and industry-related events that may help you advance your career.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 8</h2>
            <p className="mt-2"><strong>Write often:</strong> It can be beneficial as you grow and develop in your professional life to write often about your activities, thoughts, and ideas. You can gain confidence in your abilities and reflect on your experiences over time by documenting your accomplishments.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 9</h2>
            <p className="mt-2"><strong>Participate in workshops and training programs:</strong> Attend workshops, training programs, and community events relevant to your industry to learn and keep up-to-date with new resources and information.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">STEP 10</h2>
            <p className="mt-2"><strong>Get organized:</strong> To stay organized, archive your past work, create a regular schedule, and plan your upcoming steps to achieve your career goals. By tracking your progress over time, you can stay focused on long-term goals.</p>
          </div>
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

export default Blog3;
