import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const routes = [
        {name:"Home",path:"/"},
        {name:"All Campaign",path:"/allcampaign"},
        {name:"My Campaign",path:"/allcampaign"},
        {name:"My Donation",path:"/allcampaign"}
    ]

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {routes.map(r=><Link to={r.path}>{r.name}</Link>)}
                            
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SunFlower</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {routes.map(r=><Link to={r.path}><li><button className='font-bold'>{r.name}</button></li></Link>)}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"}><button className="btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;