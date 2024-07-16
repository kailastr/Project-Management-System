import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = async (e) => {
        e.preventDefault();
        //console.log(userName, password);
        try {
            const responce = await axios.post('http://localhost:5000/user/login', {
                userName: userName,
                password: password
            });
            //console.log(responce.data);
            const data = responce.data.validUser;

            if (data) {
                //to set the user's id to the localstorage
                localStorage.setItem("userId", data._id);
                navigate('/viewProjects');
            }

            if (responce.data.error) {
                throw new Error(responce.data.error);
            }

        } catch (error) {
            //console.log(error);
            alert(error);
        }
    }

    return (
        <>
            <div className='h-screen w-full bg-cyan-50 flex justify-center items-center'>
                <div className='border rounded-md border-cyan-600 w-10/12 sm:w-10/12 md:w-8/12 lg:w-4/12 p-2 flex justify-center flex-col items-center bg-cyan-100'>
                    <h1 className='text-2xl underline decoration-cyan-600 py-2'>Login</h1>
                    <form
                        onSubmit={loginSubmit}
                        className='w-full my-5 px-3 flex flex-col gap-3'
                    >
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="userName" className='text-cyan-800 '>Username</label>
                            <input
                                type="text"
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                name='userName'
                                id='userName'
                                placeholder='Enter your user name'
                                onChange={e => { setUserName(e.target.value) }}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="userPassword" className='text-cyan-800 '>Password</label>
                            <input
                                type="password"
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                name='userPassword'
                                id='userPassword'
                                placeholder='Enter your password'
                                onChange={e => { setPassword(e.target.value) }}
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-cyan-700 text-white text-lg rounded-md font-semibold hover:bg-cyan-600 py-2 transition duration-200 ease-in-out'
                        >
                            SUBMIT
                        </button>
                        <p className='text-center'>
                            don't have an account ?
                            <Link to={'/signup'}>
                                <span className='text-blue-700 cursor-pointer underline decoration-blue-700'>Register</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage