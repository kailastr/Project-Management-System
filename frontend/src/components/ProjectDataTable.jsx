import React, { useState } from 'react';

// import MUI datatable
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Tab } from '@mui/material';
import Fab from '@mui/material';

//icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const ProjectDataTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const viewProject = (project) => {
        console.log(project);
    }
    const editProject = (project) => {
        console.log(project);
    }
    const deleteProject = (project) => {
        console.log(project);
    }

    //useState variable to store the collection of project details
    const [projects, setProjects] = useState([
        {
            "_id": "668d326369c75fd52ce2a09b",
            "projectTitle": "e-commerce Site",
            "projectDescription": "An e-commerce web-application using MERN stack",
            "startDate": "2024-06-19T00:00:00.000Z",
            "deadline": "2024-07-20T00:00:00.000Z",
            "client": "Josh",
            "team": [
                "Alex",
                "Binoy"
            ],
            "budget": 20000,
            "createdAt": "2024-07-09T12:51:47.356Z",
            "updatedAt": "2024-07-09T12:51:47.356Z",
            "__v": 0
        },
        {
            "_id": "668d339d19790646188b082e",
            "projectTitle": "Chat-bot",
            "projectDescription": "An chat-bot using React-chatGPT",
            "startDate": "2024-07-19T00:00:00.000Z",
            "deadline": "2024-10-20T00:00:00.000Z",
            "client": "Alan",
            "team": [
                "Alex",
                "Binoy"
            ],
            "budget": 500000,
            "createdAt": "2024-07-09T12:57:01.710Z",
            "updatedAt": "2024-07-09T13:21:17.978Z",
            "__v": 0
        },
        {
            "_id": "668d3a925248225551f102ed",
            "projectTitle": "Ai Model",
            "projectDescription": "An chat-bot using React-chatGPT",
            "startDate": "2024-06-19T00:00:00.000Z",
            "deadline": "2024-07-20T00:00:00.000Z",
            "client": "Alan",
            "team": [
                "Alex",
                "Binoy"
            ],
            "budget": 20000,
            "createdAt": "2024-07-09T13:26:42.049Z",
            "updatedAt": "2024-07-09T13:26:42.049Z",
            "__v": 0
        }
    ]);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Action</TableCell>
                            <TableCell >Project Title</TableCell>
                            <TableCell >Project Description</TableCell>
                            <TableCell >Client</TableCell>
                            <TableCell >Start Date</TableCell>
                            <TableCell >Deadline</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects ?
                            (
                                projects.length > 0 ?
                                    (
                                        projects
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((project) => (
                                                <TableRow key={project._id}>
                                                    <TableCell>
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <Button
                                                                onClick={() => viewProject(project)}
                                                                variant="contained"
                                                                size='small'
                                                                color='success'
                                                            >
                                                                <VisibilityRoundedIcon />
                                                            </Button>
                                                            <Button
                                                                onClick={() => editProject(project)}
                                                                variant="contained"
                                                                size='small'
                                                                color='secondary'
                                                            >
                                                                <EditRoundedIcon />
                                                            </Button>
                                                            <Button
                                                                onClick={() => deleteProject(project)}
                                                                variant="contained"
                                                                size='small'
                                                                color='error'
                                                            >
                                                                <DeleteIcon />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell> {project.projectTitle}</TableCell>
                                                    <TableCell>{project.projectDescription}</TableCell>
                                                    <TableCell> {project.client} </TableCell>
                                                    <TableCell > {project.startDate}</TableCell>
                                                    <TableCell > {project.deadline} </TableCell>
                                                </TableRow>
                                            ))
                                    )
                                    :
                                    (
                                        <TableRow>
                                            <TableCell>
                                                No Projects Found !!
                                            </TableCell>
                                        </TableRow>
                                    )
                            )
                            :
                            (
                                <TableRow >
                                    <TableCell> Projects Loading..</TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={projects.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default ProjectDataTable