import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
import axios from 'axios';

const ProjectDataTable = () => {

    const navigate = useNavigate();

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
        //console.log(project);
        const id = project._id;
        navigate(`/view/${id}`);
    }
    const editProject = (project) => {
        console.log(project);
    }
    const deleteProject = async (project) => {
        // console.log("delete", project);
        if (!localStorage.userId) {
            alert("Login to delete a data");
            navigate('/login');
        } else {
            try {
                const id = project._id;
                // console.log(id);
                const data = await axios.delete(`http://localhost:5000/project/delete/${id}`);
                console.log(data);
                alert("Successfully delete the data");

                fetchProjects();
            } catch (error) {
                alert(error);
            }
        }
    }

    //useState variable to store the collection of project details
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const responce = await axios.get('http://localhost:5000/project/getall');
            // console.log("responce : ", responce.data.projects);
            setProjects(responce.data.projects);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

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