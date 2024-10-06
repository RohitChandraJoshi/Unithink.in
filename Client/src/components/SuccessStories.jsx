import React, { useEffect, useRef, useState } from "react";
import quoto from "../assets/quoto.png";
import "./scrollleftcards.css";

const successStoriesData = {
  successStories: [
    {
      name: "Abhinav",
      location: "Gr. Noida",
      review:
        "I am incredibly grateful to UniThink for their outstanding guidance and support. Thanks to their expert counseling, I not only enhanced my job profile but also successfully ventured into freelancing. Their comprehensive training in digital marketing campaigns has significantly boosted my skills and confidence. Now, alongside my job, my freelancing work is thriving. Thank you, UniThink, for helping me achieve my goals and expand my professional horizons! I can proudly say I am a UniThinker.",
    },
    {
      name: "Arnav",
      location: "New Delhi",
      review:
        'When the dream of pursuing MBBS seemed out of reach due to NEET 2024 scams, high cutoffs, and fees, Unithink became my guiding light. Their expert guidance and unwavering support made my dream a reality. The saying "If you can dream it, you can do it" became my mantra, thanks to their inspiring words. From seamless university selection to efficient visa processing, UniThink’s personalized approach was invaluable. Their mentorship, guidance, and unwavering support have not only helped me achieve my academic goals but have also instilled in me the confidence to overcome any challenges that may lie ahead. I am forever grateful for their role in my success.',
    },
    {
      name: "Etha Shree",
      location: "Bangalore",
      review:
        "I’m so thankful for UniThink’s guidance during my BCom admission process. I wasn’t sure which college or course would be the best for me, but their counseling really made everything easy. They helped me choose the right college in Bangalore that fits my goals perfectly. The entire process, from applications to admission, was smooth and stress-free, all thanks to their support. I couldn’t have done it without them!",
    },
    {
      name: "Rahul",
      location: "Bangalore",
      review:
        "UniThink played a huge role in helping me get admitted to one of the top B-schools in Bangalore for my PGDM. Their counseling team helped me navigate the complex admission process and guided me to choose the best program for my career. They were there for every step, ensuring I was on the right track. Thanks to them, I’m now studying in a place that’s perfect for my career goals, and I couldn’t be happier.",
    },
  ],
};

const SuccessStories = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current && isScrolling) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const visibleWidth = scrollContainerRef.current.clientWidth;

        if (currentScrollLeft + visibleWidth >= scrollWidth) {
          setIsScrolling(false);
          setTimeout(() => {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
            setIsScrolling(true);
          }, 1000);
        } else {
          scrollContainerRef.current.scrollBy({
            left: 1,
            behavior: "smooth",
          });
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div
      style={{
        backgroundColor: "#CFD9DF",
        backgroundImage: "linear-gradient(62deg, #CFD9DF 0%, #E2EBF0 100%)",
        padding: "20px",
      }}
      className="success-stories-container"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="success-stories-heading">
          Unithinkers' Success Stories
        </h2>

        <div
          className="success-stories-scroll"
          ref={scrollContainerRef}
          style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
        >
          {Array.from({ length: 5 }).map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              {successStoriesData.successStories.map((story, index) => (
                <div key={index} className="success-stories-card">
                  <div className="mb-4">
                    <img
                      src={quoto}
                      alt="Quote Icon"
                      className="success-stories-quote"
                    />
                  </div>
                  <p className="success-stories-review">{story.review}</p>
                  <h4 className="success-stories-name">{story.name}</h4>
                  <p className="success-stories-location">{story.location}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
