import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProjectPage = () => {
    var { id } = useParams();
    const navigate = useNavigate();

    const [projectDetails, setProjectDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(`http://localhost:5000/project/get/${id}`);
                // console.log(responce.data.project);
                setProjectDetails(responce.data.project);
            } catch (error) {
                alert("Something went wrong");
                navigate('/viewProjects');
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {projectDetails ? (
                <div className='w-full h-screen bg-cyan-800 flex justify-center items-center'>
                    <section className='w-11/12 border-2 rounded-md bg-white p-4'>
                        <div className='flex flex-col justify-between items-center'>
                            <div className=' flex items-center justify-center flex-col'>
                                <h1 className='text-2xl text-cyan-800 font-semibold'>{projectDetails.projectTitle}</h1>
                                <p className='text-cyan-800 pb-5'>All the details of the projects are shown here</p>
                            </div>
                            <div className=' flex gap-10 mb-4'>
                                <div className=' text-sm flex justify-center flex-col items-center'>
                                    <h2 className='text-cyan-800 font-semibold'>Created at : </h2>
                                    <p className='text-gray-500'>{new Date(projectDetails.createdAt).toLocaleString()}</p>
                                </div>
                                <div className=' text-sm flex justify-center flex-col items-center'>
                                    <h2 className='text-cyan-800 font-semibold'>Update at : </h2>
                                    <p className='text-gray-500'>{new Date(projectDetails.updatedAt).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <h2 className='text-xl text-cyan-800 font-semibold'>Project Description</h2>
                            <p className='text-gray-500'>{projectDetails.projectDescription}</p>
                        </div>

                        <div className='flex justify-start items-center gap-20 mb-4'>
                            <div>
                                <h2 className='text-xl text-cyan-800 font-semibold'>Start Date</h2>
                                <p className='text-gray-500'>{new Date(projectDetails.startDate).toLocaleString()}</p>
                            </div>
                            <div>
                                <h2 className='text-xl text-cyan-800 font-semibold'>Deadline</h2>
                                <p className='text-gray-500'>{new Date(projectDetails.deadline).toLocaleString()}</p>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <h2 className='text-xl text-cyan-800 font-semibold'>Client</h2>
                            <p className='text-gray-500'>{projectDetails.client}</p>
                        </div>

                        <div className='mb-4'>
                            <h2 className='text-xl text-cyan-800 font-semibold'>Team Members</h2>
                            <ol className=' list-decimal list-inside text-gray-500'>
                                {projectDetails.team.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))}
                            </ol>
                        </div>

                        <div className='mb-4'>
                            <h2 className=' text-xl text-cyan-800 font-semibold'>Budget</h2>
                            <p className='text-gray-500'>{projectDetails.budget}</p>
                        </div>
                    </section>
                </div>
            )
                :
                (
                    <div>
                        Loading Project Details..
                    </div>
                )
            }
        </>
    )
}

export default ViewProjectPage