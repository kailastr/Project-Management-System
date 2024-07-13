import './App.css';

//import pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CreateProjectPage from './pages/CreateProject.Page';
import ProjectCollectionPage from './pages/ProjectCollection.page';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />} >
          <Route path='/viewProjects' element={<ProjectCollectionPage />} />
          <Route path='/addProject' element={<CreateProjectPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
