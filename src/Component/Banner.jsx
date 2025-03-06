import React, { useState } from 'react';
import image1 from "../assets/Cow.jpg"
import image2 from "../assets/film.jpg"
import image3 from "../assets/Fish.jpeg"
import image4 from "../assets/Drone.jpg"
import { Typewriter } from 'react-simple-typewriter'

const Banner = (props) => {
    const handleType = () => {
        // access word count number
        console.log(count)}
      
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }

    return (
        <div>
            <h1 data-aos="flip-up" className='text-4xl font-bold text-center text-blue-600' >SunFlower</h1>
            <h1 className='text-center'>{''}
                <span>
                <Typewriter
            words={['Spread Love', 'Create Bonding', 'Stand By', 'Help Win!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
                </span>
            </h1>
            <h1 className='text-3xl font-bold text-center mb-2'>Our Campains</h1>
            <div className='flex justify-center'>
                <div className="carousel w-3/4">
                    <div id="slide1" className="carousel-item relative w-full">
                         <img
                            src={image1}
                            className="w-full h-screen" /> 
                        <div className='absolute bottom-60 text-center w-full'>
                            <h1 className='text-6xl bg-[rgba(0,0,255,0.3)] text-white permanent-marker-regular '>One House One Firm</h1>     
                        </div> 
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div  id="slide2" className="carousel-item relative w-full">
                        <img
                            src={image2}
                            className="w-full h-screen" />
                            <div className='absolute bottom-60 text-center w-full'>
                            <h1 className='text-6xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Anti-Drug Awarness Film</h1>     
                            </div> 
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> 
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={image3}
                            className="w-full h-screen" />
                        <div className='absolute bottom-60 text-center w-full'>
                            <h1 className='text-6xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Fisheries Project</h1>     
                            </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={image4}
                            className="w-full h-screen" />
                        <div className='absolute bottom-60 text-center w-full'>
                            <h1 className='text-6xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Developing New Technologies</h1>     
                            </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;