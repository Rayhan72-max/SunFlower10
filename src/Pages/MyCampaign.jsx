import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from 'sweetalert2';
const MyCampaign = (props) => {

    const [campaign, setCampaign] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log("email from mycampaign", user)
    useEffect(() => {
        fetch(`http://localhost:5000/mycampaign/${user.email}`)
            .then(res => res.json())
            .then(data => setCampaign(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,
            { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Campaign Updated!",
                        icon: "success"
                    });}

                const newCampaign = campaign.filter(c=> c._id !==  id);
                setCampaign(newCampaign)

            })
    }

    return (

        <div>
            <h1 className='text-xl text-center bg-linear-to-r from-cyan-500 to-blue-500 font-bold text-transparent bg-clip-text p-2'>My Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Minimum Donation</th>
                            <th>Deadline</th>

                        </tr>
                    </thead>
                    <tbody>


                        {/* row 1 */}

                        {campaign.map((campaign, index) => {
                            return <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={campaign.image}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{campaign.title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {campaign.type}
                                </td>
                                <td>
                                    {campaign.deadline}
                                </td>
                                <td>{campaign.min_donation}</td>
                                <th>
                                    <Link to={`/update`}><button className="btn btn-ghost btn-xs"><GrUpdate />Update</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(campaign._id)} className="btn btn-ghost btn-xs text-xl"><MdDelete /> Delete</button>
                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyCampaign;