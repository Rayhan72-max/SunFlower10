import React, { use, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Details = (props) => {
    const { user } = useContext(AuthContext);

    const id = useParams();

    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/details/${id.id}`)
            .then(res => res.json())
            .then(data => setCampaign(data))
    }, [])
    campaign.username = user.displayName;;
    campaign.email = user.email;
    console.log(campaign);
    const today = new Date();
    const deadline = new Date(campaign.deadline)
    const handleDonate = (e) => {
        
        if (today > deadline) {
            Swal.fire({
                title: "Sorry! Donation Program Closed!",
                icon: "error"
            });
        }else{
            fetch("http://localhost:5000/donation", {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(campaign)
            })
            Swal.fire({
                title: "Donated Successfully!",
                icon: "success"
            });
        }  
    }

    return (
        <div>
            <div className="container card bg-base-100 mx-auto  bg-blue-100 rounded-lg  w-full h-fit shadow-sm">
                <figure>
                    <img
                        src={campaign.image}
                    />
                </figure>
                <div className="card-body text-center mb-4">
                    <h2 className="text-center font-bold text-xl">{campaign.title}</h2>
                    <h1 className='opacity-50'>{campaign.type}</h1>
                    <p className=''>{campaign.description}</p>
                    <h1>{campaign.min_donation}$</h1>
                    <div className="card-actions justify-center p-2">
                        <button onClick={() => handleDonate()} className="btn bg-linear-to-r from-cyan-500 to-blue-500 animate-bounce text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;