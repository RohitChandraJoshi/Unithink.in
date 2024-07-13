import React from "react";
import verti1 from "../assets/vertical1.png";
import verti2 from "../assets/partners.png";
import verti3 from "../assets/analysis.png";
import verti4 from "../assets/business.png";
import "../components/BookNow.css";

function Categories() {
  return (
    <div className="bg-white lg:mt-14 mt-5">
      <div className="max-w-[1600px] mx-auto py-10">
        <div className="w-full mx-auto flex justify-center px-3">
          <h1 className="font-bold lg:text-5xl text-2xl text-center">
            Unlock Your Potential: Education, Careers & Business Success
          </h1>
        </div>
        {/* cards */}
        <div className="w-full mx-auto lg:px-3 px-1 flex flex-wrap justify-center items-center gap-14 lg:mt-10 mt-2">
          <div className="card flex flex-col items-center p-4">
            <div className="w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti1} alt="" className="w-24 h-24" />
            </div>
            <h4 className="font-heebo text-2xl text-center">Study Abroad</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Embark on a transformative journey with tailored study abroad programs. Explore new destinations, discover scholarships, and navigate program selection with expert guidance for a smooth international education journey toward success.
            </p>
          </div>
          <div className="card flex flex-col items-center p-4">
            <div className="w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti2} alt="" className="w-24 h-24" />
            </div>
            <h4 className="font-heebo text-2xl text-center">Community</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Connect, Collaborate, Thrive: Expand your horizons with our vibrant international community. Foster cultural exchange through events, forums, and alumni networks. Gain support, share experiences, and unlock career opportunities on your journey.
            </p>
          </div>
          <div className="card flex flex-col items-center p-4">
            <div className="w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti3} alt="" className="w-24 h-24" />
            </div>
            <h4 className="font-heebo text-2xl text-center">Training and Skill Development</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Future-Proof Your Skillset: Equip yourself for success with our comprehensive training. Master data analysis, digital marketing, and languages. Explore micro-credentials, online courses, and workshops to bridge academic and workplace needs.
            </p>
          </div>
          <div className="card flex flex-col items-center p-4">
            <div className="w-full flex items-center justify-center py-2 rounded-full">
              <img src={verti4} alt="" className="w-24 h-24" />
            </div>
            <h4 className="font-heebo text-2xl text-center">Education and Business Consulting</h4>
            <p className="text-center p-4 font-semibold text-[#4c0f0f] text-lg">
              Empower Your Growth: Navigate education and business complexities with expert consulting. Whether educator, entrepreneur, or student, thrive with us. We adapt institutions, develop training, and bridge learning to success globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
