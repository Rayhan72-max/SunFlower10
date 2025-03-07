import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaArrowDownShortWide } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip'
const AllCampaigns = (props) => {
  const { campaigns, loading,setCampaigns } = useContext(AuthContext);
  
  
    const handleSort = () => {
    setCampaigns([])
    const shortedItems = campaigns.sort((a, b) => a.min_donation - b.min_donation);
    
    setCampaigns(shortedItems)

  }
  
 
  

  return (
    <div>
      <h1 className='text-xl text-center bg-linear-to-r from-cyan-500 to-blue-500 font-bold text-transparent bg-clip-text p-2'>All Campaigns</h1>
      <div className='flex justify-end mr-2 text-xl'><button onClick={handleSort} data-tooltip-id="my-tooltip-inline" data-tooltip-content="Short By Price"><FaArrowDownShortWide /></button></div>
      <Tooltip
        id="my-tooltip-inline"
        style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
      />
      {
        loading ? <span className="loading loading-dots loading-xl"></span> :
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    No.
                  </th>
                  <th>Title</th>

                  <th>Deadline</th>
                  <th>Minimum Donation</th>
                </tr>
              </thead>
              <tbody>


                {/* row 1 */}

                {campaigns.map((campaign, index) => {
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
                          <div className="text-sm opacity-50">{campaign.type}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {campaign.deadline}
                    </td>
                    <td>{campaign.min_donation}</td>
                    <th>
                      <Link to={`/details/${campaign._id}`}><button className="btn btn-ghost btn-xs">See More</button></Link>
                    </th>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default AllCampaigns;