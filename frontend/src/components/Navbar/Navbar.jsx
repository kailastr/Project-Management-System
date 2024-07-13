import React from 'react'

import logoutImg from '../../images/logout.png';

import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='w-full h-16 bg-cyan-950 border-b-2 border-cyan-400 text-lg flex justify-center items-center gap-5 text-cyan-200'>
            <Link to={"/viewProjects"}>
                <p>View Projects</p>
            </Link>
            <Link to={"/addProject"}>
                <p>Add Projects</p>
            </Link>
            <Link to={"/login"}>
                <img src={logoutImg} className='w-10 h-10 border-2 border-cyan-200 rounded-full' alt="" />
            </Link>
        </nav>
    )
}

export default Navbar