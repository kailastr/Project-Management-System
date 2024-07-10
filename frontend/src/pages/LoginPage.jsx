import React, { useState } from 'react'

const LoginPage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(userName, password);
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
                            don't have an account ? <span className='text-blue-700 cursor-pointer underline decoration-blue-700'>Register</span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage