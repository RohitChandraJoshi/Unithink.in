import React from 'react'
import { Button, Card } from 'flowbite-react';
import course1 from '../assets/course-1.jpg'
import course2 from '../assets/course-2.jpg'
import course3 from '../assets/course-3.jpg'
import rotated from '../assets/rotated.png'
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Articles() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
      };
  return (
    <div>
        <div>
            <div  style={{ backgroundImage: `url(${rotated})` }} className=' p-2 pb-5 bg-cover bg-center bg-no-repeat'>
                <div className="flex items-center mt-5">
                    <div className="text-center mx-auto pt-5">
                        <p className="mb-4 mt-10 pt-5 text-gray-500 font-medium ">LATEST ARTICLES</p>
                        <h1 className="mb-4 text-5xl font-bold sm:text-lg md:text-4xl">Get News With UniThink</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course3}>
                        <Link to='/faqs'>
                        <Button pill gradientDuoTone='pinkToOrange' onClick={scrollToTop}  outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                        </Link>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                How do I choose the right destination for me ?
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            Understand the factors to consider when selecting a study destination that aligns with your academic, cultural, and personal preferences.
                            </p>
                        </Card>
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course2}>
                        <Link to='/faqs'>
                        <Button pill gradientDuoTone='pinkToOrange' onClick={scrollToTop}  outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                        </Link>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                What are the challenges of studying abroad, and how can I overcome them ?
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            Address concerns such as cultural adjustment, homesickness, language barriers, and academic differences, and discover strategies for overcoming these challenges.
                            </p>
                        </Card>
                        <Card className="max-w-sm relative hover:scale-105 shadow-xl " imgSrc={course1}>
                        <Link to='/faqs'>
                        <Button pill gradientDuoTone='pinkToOrange' onClick={scrollToTop}  outline className="absolute top-48 right-2 z-1 border border-red-500 p-0 m-0"><HiArrowCircleRight size={30}/></Button>
                        </Link>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                What support services are available for international students ?
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            Learn about resources such as international student advisors, language support, housing assistance, and student organizations offered by universities abroad.
                            </p>
                        </Card>
                    </div>
                </div>
                <Link to='/faqs'>
                    <Button outline size='lg' onClick={scrollToTop}  gradientDuoTone="pinkToOrange" pill className='mx-auto justify-items-center mt-12 hover:scale-105' style={{ zIndex: 1, marginBottom: '60px' }}>Browse more FAQs <HiArrowCircleRight size={25} /></Button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Articles