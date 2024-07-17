import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

//import pages
import Navbar from './components/Navbar/Navbar';
import DefaultLayout from './components/Layout/DefaultLayout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CreateProjectPage from './pages/CreateProject.Page';
import ProjectCollectionPage from './pages/ProjectCollection.page';
import ViewProjectPage from './pages/ViewProject.Page';
import EditProjectPage from './pages/EditProject.Page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/' element={<DefaultLayout />} >
          <Route path='/viewProjects' element={<ProjectCollectionPage />} />
          <Route path='/view/:id' element={<ViewProjectPage />} />
          <Route path='/addProject' element={<CreateProjectPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/edit/:id' element={<EditProjectPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
