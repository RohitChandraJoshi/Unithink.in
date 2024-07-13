import React from 'react'
import usa from '../assets/usa.jpg'
import uk from '../assets/uk.jpg'
import homebg from '../assets/homebg.png'
import { Button } from 'flowbite-react';
import pp from '../assets/pp.jpeg'
import videoShape from '../assets/video-shape-1.png'
import videoShape2 from '../assets/video-shape-2.png'
import { HiArrowCircleRight } from "react-icons/hi";

import { Link } from 'react-router-dom'

function PopularCountriesImages() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
      };
  return (
    <div>
        <div  style={{ backgroundImage: `url(${homebg})` }} className='bg-cover bg-center bg-no-repeat'>
            <div>
                <div className="flex items-center mt-5">
                    <div className="text-center mx-auto pt-5">
                        <p className="mb-4 mt-10 pt-5 text-red-500 font-medium ">POPULAR COUNTRIES</p>
                        <h1 className="mb-4 text-5xl font-semibold sm:text-lg md:text-3xl"> Pick a country you like the most</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center mt-5 mx-auto text-center gap-10 items-center lg:ml-12 ml-8 mr-9'  >
                <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className="relative max-w-100 mb-4 group">
                        <img src={usa} alt="USA" className='rounded-xl shadow-xl w-full group-hover:blur-sm transition duration-300 ease-in-out' />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-xl">
                            <span className="text-white text-xl font-bold">USA</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div className="relative max-w-100 mb-4 group">
                        <img src={uk} alt="UK" className='rounded-xl shadow-xl w-full group-hover:blur-sm transition duration-300 ease-in-out' />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-xl">
                            <span className="text-white text-xl font-bold">UK</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div className="relative max-w-100 mb-4 group">
                        <img src={pp} alt="Popular Place" className='rounded-xl shadow-xl w-full group-hover:blur-sm transition duration-300 ease-in-out' />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-xl">
                            <span className="text-white text-xl font-bold">France</span>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/countries'>
                <Button outline size='lg' onClick={scrollToTop} gradientDuoTone="pinkToOrange" pill className='mx-auto justify-items-center mt-12 hover:scale-105' style={{ zIndex: 1, marginBottom: '60px' }}>Browse more Countries <HiArrowCircleRight size={25} /></Button>
            </Link>
            <div className='mx-auto pt-10 mb-10 relative p-2' style={{ maxWidth: '100%', width: '800px' }}>
                <img src={videoShape} alt="" className="hidden md:block absolute inset-0 w-full h-full rounded-3xl scale-150" style={{ zIndex: -1 }} />
                <img src={videoShape2} alt="" className="absolute -top-10 -right-12" style={{ zIndex: 2 }} />
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/fjvNz8u70bw?si=xP5LveJ-uiUa92xI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loop
                    style={{ maxWidth: '100%', zIndex: 5 }}
                    className='rounded-3xl shadow-xl'
                >
                </iframe>
            </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 lg:pl-52 lg:pr-52 md:grid-cols-4 mx-auto text-center justify-items-center lg:pt-20 pt-5 pb-5"> 
            <div className='border rounded-xl p-10 scale-105 bg-green-100 shadow-xl'>
                <h1 className='font-bold text-3xl text-green-400'>201+</h1>
                <p>UNIVERSITIES TIED</p>
            </div>
            <div className='border rounded-xl p-10 scale-105 bg-red-100 shadow-xl'>
                <h1 className='font-bold text-3xl text-red-500'>1.2K+</h1>
                <p>COURSES AVAILABLE</p>
            </div>
            <div className='border rounded-xl p-10 scale-105 bg-purple-100 shadow-xl'>
                <h1 className='font-bold text-3xl text-purple-500'>100%</h1>
                <p>SATISFACTION RATE</p>
            </div>
            <div className='border rounded-xl p-10 scale-105 bg-yellow-100 shadow-xl'>
                <h1 className='font-bold text-3xl text-yellow-500'>98%</h1>
                <p>VISA ACCEPTANCE</p>
            </div>
        </div> */}

    </div>
  )
}

export default PopularCountriesImages
