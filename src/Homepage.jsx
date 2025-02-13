import React from "react";
import { Link } from 'react-router-dom';
import {experiences} from './ExperienceData';
import { Experience } from "./components/ExperienceBlurb";

function Homepage() {
  const listItems = experiences.map((exp) => (
    <Experience key={exp.id} title={exp.title} description={exp.description}/>
  ));
  return (
    <div>
        <h1>Nice to meet u :)</h1>
        <p>You probably know me as purple-affogato (or other names irl!), but that's what I go by on GitHub. </p>
        <p>While you're here though, check out my projects and learn more about me. :D</p>
        <h1>Skills</h1>
        <ul>
          <li>Languages: Python, C, Javascript, Java</li>
          <li>Technology & Libraries: </li>
        </ul>
        <h1>Experience</h1>
        <>{listItems}</>
        <h1>Contact Info</h1>
        <Link to="https://github.com/purple-affogato" className="link">GitHub</Link>
        <Link to="https://www.linkedin.com/in/ivy-y-zhuang" className="link">LinkedIn</Link>
    </div>
);
}


export default Homepage;
