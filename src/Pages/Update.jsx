import React, { createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const Update = (props) => {
    const {user} = useContext(AuthContext)
    console.log(user.email)
    const handleCampaign= (e)=>{
            e.preventDefault();
            
            const form = e.target;
            
            const thumbnail = form.thumbnail.value;
            const email = form.email.value;
            const title = form.title.value;
            const type = form.type.value;
            const description = form.description.vlaue;
            const amount = form.amount.value;
            const deadline = form.deadline.value;
            const campaign = {name,email,thumbnail,title,type,description,amount,deadline}; 
            console.log(name,amount)
            fetch(`http://localhost:5000/update/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(campaign)
            }
            ).then(res=>res.json())
            .then(data=>{ 
                if(data.acknowledged === true){
                    Swal.fire({
                        title: "Campaign Updated!",
                        icon: "success"
                      });
                }
                
                console.log(data)})
            document.getElementById("form").reset();
        }
        
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form id='form' onSubmit={handleCampaign} className="fieldset">
                                <label className="fieldset-label">Thumbnail</label>
                                <input type="text" name='thumbnail' className="input" placeholder="Image URL" />
                                <label className="fieldset-label">Title</label>
                                <input type="text" name="title" className="input" placeholder="Campaign Title" />
                                <label className="fieldset-label">Campaign Type</label>
                                <input type="text" name='type' className="input" placeholder="ex. SME Funding " />
                                <label className="fieldset-label">Description</label>
                                <input type="text" name='description' className="input" placeholder="Description" />
                                <label className="fieldset-label">Minimum Donation Amount</label>
                                <input type="number" name='amount' className="input" placeholder="00" />
                                <label className="fieldset-label">Deadline</label>
                                <input type="date" name='deadline' className="input"/>
                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" value={user.email}/>
                                <label className="fieldset-label">Name</label>
                                <input type="text" name='name' className="input" value={user.displayName}/>
                                <button className='btn bg-linear-to-r from-cyan-500 to-blue-500 font-bold' type='submit'>ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;