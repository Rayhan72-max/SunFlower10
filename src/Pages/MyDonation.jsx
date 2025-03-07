import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const MyDonation = (props) => {
    
    const [campaigns,setCampaign] = useState([]) 
    const {user,loading,setLoading} = useContext(AuthContext);
    const email = user.email;
    
    useEffect(()=>{
        
        fetch(`https://sunflower-server-hazel.vercel.app/mydonation/${email}`)
        .then(res=>res.json())
        .then(data=>{
            
            setLoading(false)
            setCampaign(data)
            })
    },[])
    return (
        <div className='flex flex-col lg:grid grid-cols-3 gap-2'>
            
            {loading?
                <span className="loading loading-dots loading-xl"></span>:
                campaigns.map(campaign=>{
                return <div className="card bg-base-100 w-full h-full shadow-sm">
                <figure>
                    <img
                        src={campaign.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{campaign.title}</h2>
                    <p>{campaign.description}</p>                        
                </div>
            </div>
            })}
        </div>
    );
};

export default MyDonation;