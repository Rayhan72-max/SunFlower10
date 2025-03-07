import React from 'react';
import logo from "../assets/logo.jpg"
const About = (props) => {
    return (
        <div>
            <section className='grid mt-2 justify-center p-8 lg:grid-cols-3 gap-2'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <h1 className='text-6xl font-bold '>CrowdCube</h1>
                        <hr />
                        <p className='mt-4'>
                            CrowdCube is a crowdsourcing organization dedicated to bringing people together to support meaningful causes. Like a CrowdCube turning towards the sun, we strive to spread hope, positivity, and growth by connecting donors with impactful projects. Through collective efforts, we empower communities, fund innovative ideas, and create lasting change. 🌻✨
                        </p>
                    </div>
                </section>
        </div>
    );
};

export default About;