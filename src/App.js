import React from "react";
import AboutMe from './AboutMe';
import ProjectList from './Projects';
import Homepage from "./Homepage";
import Template from './Template';
import { Routes, Route } from "react-router-dom";
import ErrorPage from './Error';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Template />} errorElement={<ErrorPage/>}>
                <Route index element={<Homepage/>}  />
                <Route path="about-me" element={<AboutMe />}/>
                <Route path="projects" element={<ProjectList />}/>
            </Route>
        </Routes>
    </div>
);
}


export default App;
