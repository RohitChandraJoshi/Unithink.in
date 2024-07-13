import React from "react";
import service from "../assets/service.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import service7 from "../assets/service7.png";
import service8 from "../assets/service8.png";
import service9 from "../assets/service9.png";
import service10 from "../assets/service10.png";

const services = [
  {
    img: service1,
    title: 'Career Guidance',
    description: 'Offering personalized counseling to help students explore their interests, strengths, and potential career paths, guiding them towards fulfilling professional futures.',
  },
  {
    img: service2,
    title: 'University Selection',
    description: 'Assisting students in identifying the most suitable universities based on their academic background, interests, and career goals.',
  },
  {
    img: service3,
    title: 'Admission Assistance',
    description: 'Providing guidance and support throughout the university application process, including application strategy, documentation, and submission.',
  },
  {
    img: service4,
    title: 'Visa Guidance',
    description: 'Assisting students with visa application procedures, documentation requirements, and interview preparation to facilitate a smooth transition to their chosen study destination.',
  },
  {
    img: service5,
    title: 'Scholarship Support',
    description: 'Helping students explore scholarship opportunities and providing guidance on application procedures to secure financial assistance for their education.',
  },
  {
    img: service6,
    title: 'Immigration Assistance',
    description: 'Supporting students with immigration processes, including residency permits, work permits, and other legal requirements associated with studying abroad.',
  },
  {
    img: service7,
    title: 'Test Preparation',
    description: 'Offering resources and guidance for standardized tests such as the SAT, ACT, GRE, GMAT, TOEFL, and IELTS to help students achieve their desired scores.',
  },
  {
    img: service8,
    title: 'Application Review',
    description: 'Reviewing and providing feedback on students\' application materials, including personal statements, essays, and resumes, to enhance their chances of acceptance.',
  },
  {
    img: service9,
    title: 'Alumni Network',
    description: 'Connecting students with alumni networks and resources to facilitate networking opportunities and career development.',
  },
  {
    img: service10,
    title: 'Post-Admission Support',
    description: 'Providing ongoing support to students even after admission, including orientation assistance, academic advising, and adjustment support.',
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1920px] mx-auto lg:py-16 py-10 border-b">
        <div className="w-11/12 mx-auto lg:flex">
          <div className="lg:px-8 flex flex-col justify-center gap-6">
            {/* Heading */}
            <div className="text-3xl">
              <h1 className="uppercase text-center font-bold tracking-widest text-gray-800 text-left mb-8">
                Services Offered
              </h1>
            </div>
            <div>
              <img src={service} alt="Description of the image" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-40 object-cover"  />
                  </div>
                  <div className="p-4">
                    <h2 className=" text-center text-lg font-semibold text-gray-800">{service.title}</h2>
                    <p className=" text-center text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
