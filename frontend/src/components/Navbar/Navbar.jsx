import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import logoutImg from '../../images/logout.png';
import loginImg from '../../images/loginImg.jpg';

const Navbar = () => {

    const navigate = useNavigate();

    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem("userId");
        if (id) {
            // console.log("Logged In");
            setisLoggedIn(true);
        }
        else {
            // console.log("Not logged In");
            setisLoggedIn(false);
        }
    }, []);

    const loginAction = () => {
        // isLoggedIn ? logout : navigate('/login');
        if (isLoggedIn) {
            logout();
        }
        else {
            navigate('/login');
        }
    }

    const logout = () => {
        localStorage.removeItem("userId");
        alert("Successfully logged out");
    }

    return (
        <nav className='w-full h-16 bg-cyan-950 border-b-2 border-cyan-400 text-lg flex justify-center items-center gap-5 text-cyan-200'>
            <Link to={"/viewProjects"}>
                <p>View Projects</p>
            </Link>
            <Link to={"/addProject"}>
                <p>Add Projects</p>
            </Link>
            <div onClick={loginAction}>
                <img
                    src={isLoggedIn ? loginImg : logoutImg}
                    className='w-10 h-10 border-2 border-cyan-200 rounded-full'
                    alt="Profile Pic"
                />
            </div>
        </nav>
    )
}

export default Navbar