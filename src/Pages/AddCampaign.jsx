import React from 'react';

const AddCampaign = (props) => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Campaign</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Thumbnail</label>
                                <input type="text" className="input" placeholder="Image URL" />
                                <label className="fieldset-label">Title</label>
                                <input type="text" className="input" placeholder="Campaign Title" />
                                <label className="fieldset-label">Campaign Type</label>
                                <input type="text" className="input" placeholder="ex. SME Funding " />
                                <label className="fieldset-label">Description</label>
                                <input type="text" className="input" placeholder="Description" />
                                <label className="fieldset-label">Minimum Donation Amount</label>
                                <input type="number" className="input" placeholder="00" />
                                <label className="fieldset-label">Deadline</label>
                                <input type="date" className="input"/>
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input"/>
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input"/>
                                <button className='btn bg-linear-to-r from-cyan-500 to-blue-500 font-bold' type='btn'>ADD</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;