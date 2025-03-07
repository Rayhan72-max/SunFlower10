import React, { useState } from 'react';
import image1 from "../assets/Cow.jpg"
import image2 from "../assets/film.jpg"
import image3 from "../assets/Fish.jpeg"
import image4 from "../assets/Drone.jpg"
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { Typewriter } from 'react-simple-typewriter'

const Banner = (props) => {
    const [details, setDetails] = React.useState(null)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            detailsChanged(s) {
                setDetails(s.track.details)
              },
              initial: 2,
            
          },[
            (slider) => {
              let timeout
              let mouseOver = false
              function clearNextTimeout() {
                clearTimeout(timeout)
              }
              function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                  slider.next()
                }, 2000)
              }
              slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                  mouseOver = true
                  clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                  mouseOver = false
                  nextTimeout()
                })
                nextTimeout()
              })
              slider.on("dragStarted", clearNextTimeout)
              slider.on("animationEnded", nextTimeout)
              slider.on("updated", nextTimeout)
            },
          ] 
    )
    function scaleStyle(idx) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * 0.1)
        return {
          transform: `scale(${scale})`,
          WebkitTransform: `scale(${scale})`,
        }
      }
    return (
        
            <div>
                <h1 data-aos="flip-up" className='text-4xl font-bold text-center text-blue-600' >CrowdCube</h1>
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
                        />
                    </span>
                </h1>
                
                <div ref={sliderRef} className="h-screen keen-slider zoom-out">
                    
                        <div style={scaleStyle(1)} className="keen-slider__slide zoom-out__slide">
                            
                                <figure className='flex justify-center'>
                                    <img src={image1} className='justify-center h-screen'/>
                                </figure>
                                    
                                
                            
                            <div className='absolute bottom-10 flex justify-center w-full'>
                                <div className='w-fit'>
                                    <h1 className='text-2xl bg-[rgba(0,0,255,0.3)] text-white permanent-marker-regular '>One House One Firm</h1>
                                </div>
                            </div>
                            
                        </div>
                        <div style={scaleStyle(1)} className="keen-slider__slide zoom-out__slide">
                            
                                <figure className='flex justify-center'>
                                    <img src={image2} className='justify-center h-screen'/>
                                </figure>
                                    
                                
                            
                            <div className='absolute bottom-10 flex justify-center w-full'>
                                <div className='w-fit'>
                                    <h1 className='text-2xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Anti-Drug Awarness Film</h1>
                                </div>
                            </div>
                            
                        </div>
                        <div style={scaleStyle(1)} className="keen-slider__slide zoom-out__slide">
                            
                                <figure className='flex justify-center'>
                                    <img src={image3} className='justify-center h-screen'/>
                                </figure>
                                    
                                
                            
                            <div className='absolute bottom-10 flex justify-center w-full'>
                                <div className='w-fit'>
                                    <h1 className='text-2xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Fisheries Project</h1>
                                </div>
                            </div>
                            
                        </div>
                        <div style={scaleStyle(1)} className="keen-slider__slide zoom-out__slide">
                            
                                <figure className='flex justify-center'>
                                    <img src={image4} className='justify-center h-screen'/>
                                </figure>
                                    
                                
                            
                            <div className='absolute bottom-10 flex justify-center w-full'>
                                <div className='w-fit'>
                                    <h1 className='text-2xl text-white bg-[rgba(0,0,255,0.3)] permanent-marker-regular '>Developing New Technologies</h1>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        
    );
};

export default Banner;