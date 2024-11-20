import React from 'react'
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './Error.jsx';
import Homepage from './Homepage.jsx';
import ProjectList from './Projects.jsx';
import Template from './components/Template.jsx';
import AboutMe from './AboutMe.jsx';

function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<Template />} errorElement={<ErrorPage/>}>
                <Route index element={<Homepage/>}  />
                <Route path='*' element={<ErrorPage/>} />
                <Route path="about-me" element={<AboutMe />}/>
                <Route path="projects" element={<ProjectList />}/>
            </Route>
        </Routes>
        
    </>
  )
}

export default App
