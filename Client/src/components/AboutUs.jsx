import React from 'react'
import aboutus from '../assets/aboutus.png'
import aboutusperson from '../assets/aboutusperson1.png'
import { BsCheck2All } from "react-icons/bs";
import aboutshape from '../assets/about-shape-2.svg'
import Quiz from './Quiz';

function AboutUs() {
    
  return (
    <div>
        <div>
            <div>
                <div style={{ backgroundImage: `url(${aboutus})` }} className='bg-left bg-no-repeat'>
                    <div className="relative mx-auto flex max-w-5xl flex-col md:flex-row md:items-center sm:gap-2 p-2">
                        
                        <Quiz />
                        <div className='p-16'>
                          
                            
                            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-4 ">
                                Over 15 Years in <span className='text-red-500'> Placing Students </span> all over the world
                            </h5>
                            <p className="font-normal text-gray-500 dark:text-gray-400 pb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit, quis, blanditiis dignissimos temporibus tempore, quidem officia quo amet odit nostrum. Beatae nihil sunt consequuntur et odit repellat porro quidem!
                            </p>
                            <div className=''>
                                <p className='flex gap-2'><BsCheck2All /> Education Consultancy</p>
                                <p className='flex gap-2'><BsCheck2All /> Business Consultancy</p>
                                <p className='flex gap-2'><BsCheck2All /> Mentorship</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs