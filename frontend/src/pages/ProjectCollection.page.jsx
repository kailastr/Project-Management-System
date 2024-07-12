import React from 'react';

//import datatable
import ProjectDataTable from '../components/ProjectDataTable';

// import MUI

const ProjectCollectionPage = () => {
    return (
        <div className='w-full h-screen bg-cyan-800 flex items-center justify-center'>
            <section className='w-11/12 border-2 rounded-md bg-white'>
                <h1 className='text-2xl text-cyan-800 font-semibold px-4 pt-2'>Project Collection</h1>
                <p className='text-cyan-800 px-4 pb-5'>View collection of your Projects</p>
                <ProjectDataTable />
            </section>
        </div>
    )
}

export default ProjectCollectionPage;