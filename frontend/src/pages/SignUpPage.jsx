import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");

    const signUpSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, userName, password, confirmPassword, gender);
    }

    return (
        <>
            <div className='h-screen w-full bg-cyan-50 flex justify-center items-center'>
                <div className='border border-cyan-600 rounded-md w-10/12 sm:w-10/12 md:w-8/12 lg:w-4/12 p-2 flex justify-center items-center flex-col bg-cyan-100'>
                    <h1 className='text-2xl underline decoration-cyan-600'>Register</h1>
                    <form
                        className='w-full my-5 px-3 flex flex-col gap-4'
                        onSubmit={signUpSubmit}
                    >
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="fullName" className='text-cyan-700'>Full Name</label>
                            <input
                                type="text"
                                name='fullName'
                                id='fullName'
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400 '
                                placeholder='Enter your full Name'
                                onChange={event => { setFullName(event.target.value) }}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="userName" className='text-cyan-700'>User Name</label>
                            <input
                                type="text"
                                name='userName'
                                id='userName'
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400 '
                                placeholder='Enter your user name'
                                onChange={e => { setUserName(e.target.value) }}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="password" className='text-cyan-700'>Password</label>
                            <input
                                type="password"
                                name='password'
                                id='password'
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400 '
                                placeholder='Enter your password'
                                onChange={e => { setPassword(e.target.value) }}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start'>
                            <label htmlFor="confirmPassword" className='text-cyan-700'>Confirm Password</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                id='confirmPassword'
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400 '
                                placeholder='Re-enter your password'
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {password !== confirmPassword && (
                            <p className='text-red-600 text-sm'>Password doesn't match</p>
                        )}
                        <div className='w-full flex flex-col'>
                            <p className='text-cyan-700'>Select your gender</p>
                            <div className='w-full flex flex-row gap-5'>
                                <div className='flex flex-row gap-2'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                        onChange={e => { setGender(e.target.value) }}
                                        required
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        onChange={e => { setGender(e.target.value) }}
                                        required
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-cyan-700 text-white text-lg py-2 rounded-md font-semibold hover:bg-cyan-600 transition duration-200 ease-in-out'
                        >
                            SUBMIT
                        </button>
                        <p className='text-center'>
                            Already have an account ?
                            <Link to={"/login"}>
                                <span className='text-blue-700 underline decoration-blue-700 cursor-pointer'>Login</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpPage