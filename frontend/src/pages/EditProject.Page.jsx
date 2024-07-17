import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const EditProjectPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { project } = location.state;
    // console.log(project);

    var { id } = useParams();
    const [projectTitle, setProjectTitle] = useState(project.projectTitle);
    const [projectDescription, setProjectDescription] = useState(project.projectDescription);
    const [startDate, setStartDate] = useState(project.startDate);
    const [deadline, setDeadline] = useState(project.deadline);
    const [client, setClient] = useState(project.client);
    const [budget, setBudget] = useState(project.budget);
    const [team, setTeam] = useState(project.team);

    const [teamMember, setTeamMember] = useState(project.team);

    const addMembers = (e) => {
        e.preventDefault();
        if (teamMember.trim() !== "") {
            setTeam([teamMember.trim()]);
            setTeamMember("");
        }
    }

    const submitProject = async (e) => {
        e.preventDefault();
        try {
            const updatedProject = {
                projectTitle: projectTitle,
                projectDescription: projectDescription,
                startDate: startDate,
                deadline,
                client,
                budget,
                team
            };

            const responce = await axios.put(`http://localhost:5000/project/update/${id}`, updatedProject);
            console.log(responce);
            alert("Successfully updated ..");
            navigate('/viewProjects');

        } catch (error) {
            console.log(error);
            alert("Something went wront .. Please try again");
        }
    }

    return (
        <div className='w-full bg-cyan-800 flex justify-center items-center'>
            <section className='w-11/12 border-2 rounded-md bg-white my-10'>
                <h1 className='text-2xl text-cyan-800 font-semibold px-4 pt-2'>Edit Project</h1>
                <p className='text-cyan-800 px-4 pb-5'>Update the Project Details</p>
                <form onSubmit={submitProject} >
                    <div className='w-full flex flex-col px-4 my-3 gap-5'>
                        <div className='w-full flex flex-col justify-start gap-1'>
                            <label
                                htmlFor="projectTitle"
                                className='text-cyan-700'
                            >
                                Project Title
                            </label>
                            <input
                                type="text"
                                name="projectTitle"
                                id="projectTitle"
                                onChange={e => setProjectTitle(e.target.value)}
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                // placeholder='Enter your project Title'
                                value={projectTitle}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start gap-1'>
                            <label
                                htmlFor="projectDescription"
                                className='text-cyan-700'
                            >Project Description</label>
                            <textarea
                                name="projectDescription"
                                id="projectDescription"
                                rows="3"
                                // cols={"10"}
                                onChange={e => setProjectDescription(e.target.value)}
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                // placeholder='Enter your Project Description here'
                                value={projectDescription}
                                required
                            ></textarea>
                        </div>
                        <div className='w-full flex flex-col sm:flex-col md:flex-row '>
                            <div className='w-1/2 flex flex-col gap-1'>
                                <label htmlFor="startDate" className='text-cyan-700'>Project StartDate</label>
                                <div>
                                    <input
                                        type="date"
                                        name="startDate"
                                        onChange={e => setStartDate(e.target.value)}
                                        value={startDate}
                                        id="startDate"
                                        className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col gap-1'>
                                <label htmlFor="deadline" className='text-cyan-700'>Project Deadline</label>
                                <div>
                                    <input
                                        type="date"
                                        name="deadline"
                                        id="deadline"
                                        value={deadline}
                                        onChange={e => setDeadline(e.target.value)}
                                        className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-start gap-1'>
                            <label htmlFor="client" className='text-cyan-700'>Client Name</label>
                            <input
                                type="text"
                                name="client"
                                id="client"
                                onChange={e => setClient(e.target.value)}
                                className='border-2 border-cyan-600 rounded-md p-1 focus:outline-cyan-400'
                                // placeholder="Enter your client's Name"
                                value={client}
                                required
                            />
                        </div>
                        <div className='w-full flex flex-col justify-start gap-1'>
                            <label htmlFor="budget">Project Budget</label>
                            <div className='w-full flex justify-start bg-white border-2 border-cyan-600 rounded-md overflow-hidden'>
                                <div className='w-1/12 flex justify-center bg-cyan-100 items-center border border-r-cyan-600'>
                                    <p className='text-lg text-center'>₹</p>
                                </div>
                                <input
                                    type="number"
                                    name="budget"
                                    id="budget"
                                    onChange={e => setBudget(e.target.value)}
                                    className='w-11/12 border-none focus:outline-cyan-400 px-2'
                                    // placeholder='Enter the Project Budget in INR'
                                    value={budget}
                                    required
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-start gap-1'>
                            <label htmlFor="teamMembers" className='text-cyan-700'>Project Team Members</label>
                            <div className='w-full flex justify-start bg-white border-2 border-cyan-600 rounded-md overflow-hidden'>
                                <button
                                    className='w-1/12 flex justify-center items-center bg-cyan-700 border border-cyan-600 text-lg hover:bg-cyan-600 font-semibold text-white transition duration-200 ease-in-out'
                                    onClick={addMembers}
                                >
                                    Add
                                </button>
                                <input
                                    type="text"
                                    name="teamMembers"
                                    id="teamMembers"
                                    value={teamMember}
                                    onChange={e => setTeamMember(e.target.value)}
                                    className='w-11/12 border-none focus:outline-cyan-400 px-2'
                                    placeholder='Enter your team members name like : User1, User2, ..'
                                // required
                                />
                            </div>
                            <p className='text-gray-500'>Project Team Members : {team.map((member, index) => <span key={index}>{member}{index < team.length - 1 ? ", " : ""}</span>)}</p>
                        </div>
                        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-2 mt-8'>
                            <button type='submit' className='px-10 py-1 border-2 border-blue-600 rounded-md font-semibold bg-blue-200 hover:bg-blue-300 hover:shadow-lg transition duration-200 ease-in-out'>SUBMIT</button>
                            <button type='reset' className='px-10 py-1 border-2 border-red-600 rounded-md font-semibold bg-red-200 hover:bg-red-300 hover:shadow-lg transition duration-200 ease-in-out'>CANCEL</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default EditProjectPage