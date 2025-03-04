import React, { useEffect, useState } from 'react';
import logo from "../assets/SunFlower.jpg"
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import img1 from "../assets/Cow.jpg"
/* import img2 from ""
import img3 from ""
import img4 from "" */

const Home = (props) => {
    const [campaigns, setCampaigns] = useState([])
    const [isWide,setIsWide] = useState(false);
    const handleWide = () =>{
        if(isWide===false){setIsWide(true);}
    }
    useEffect(() => {
        fetch("http://localhost:5000/campaign").then(res => res.json())
        .then(data => setCampaigns(data))
    }, [])
    const today = new Date();
    const runnigCampaigns = campaigns.filter(campaign => {
        const deadline = new Date(campaign.deadline)
        return deadline > today;
    })
    console.log(runnigCampaigns.length)
    console.log(campaigns.length)
    return (
        <div>
            <Banner></Banner>
            <section className='grid mt-2 justify-center p-8 lg:grid-cols-3 gap-2'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='col-span-2'>
                    <h1 className='text-6xl font-bold '>SunFlower</h1>
                    <hr />
                    <p className='mt-4'>
                        Sunflower is a crowdsourcing organization dedicated to bringing people together to support meaningful causes. Like a sunflower turning towards the sun, we strive to spread hope, positivity, and growth by connecting donors with impactful projects. Through collective efforts, we empower communities, fund innovative ideas, and create lasting change. 🌻✨
                    </p>
                </div>
            </section>
            <section>
                <h1 className='text-center'>Runnig Campaign</h1>

                <div className='grid grid-cols-3 gap-2'>
                {runnigCampaigns.map(campaign => 
                <div className="card bg-base-100 w-full h-full shadow-sm">
                    <figure>
                        <img
                            src={campaign.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{campaign.title}</h2>
                        <p>{campaign.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>)}
                </div>
            </section>
            <section>
            
            <h1 class="text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 text-transparent bg-clip-text text-center p-2"> Our Program </h1>
            <div className='flex items-center gap-24'>
            <div className={isWide?'grid grid-cols-3 gap-6 p-4 text-white': "stack stack-start size-90 ml-2 mb-2"} >
            <div className='card-body bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg p-4'>
            <h1 className='text-4xl mb-2 font-bold'>Microfunding for Small Businesses</h1>
            <p>Many aspiring entrepreneurs lack the funds to kickstart their businesses. "Seeds of Change" is a microfunding program that helps small business owners and startups get the necessary financial support to launch and grow. Through our platform, donors can directly contribute to promising ventures, ensuring that creative ideas turn into successful businesses.</p>
            </div>
            <div className='card bg-linear-to-r from-cyan-500 to-blue-300 rounded-lg p-4'>
            <h1 className='text-4xl mb-9 font-bold'>Bright Futures</h1>
            <p>Education is the foundation of a brighter future. "Bright Futures" is a scholarship and mentorship program that provides financial assistance, school supplies, and career guidance to underprivileged students. Donors can sponsor a student’s tuition, books, or skill development courses, helping them achieve their dreams.</p>
            </div>
            <div className='card bg-linear-to-r from-cyan-300 to-blue-500 rounded-lg p-4'>
            <h1 className='text-4xl mb-9 font-bold'>Helping Hands</h1>
            <p>During emergencies, immediate financial aid can save lives. "Helping Hands" is a community-driven program that raises funds for medical emergencies, disaster relief, and urgent personal crises. Sunflower connects donors with those in need, ensuring quick and transparent assistance for critical situations.</p>
            </div>
            </div>
            <div onClick={handleWide} className={isWide?"hidden":"text-4xl text-blue-500 hover:text-green-500"}>
            <FaRegArrowAltCircleRight/>
            </div>
            </div>
            </section>
            <section>
                <h1 className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 text-transparent bg-clip-text text-center p-2">Gellary</h1>
            <div className='grid grid-cols-3 gap-4'>
                    <img src={img1} id="img"/>
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
                    <img src={img1} className='hover:absolute' />
            </div>
            </section>
        </div>
    );
};

export default Home;