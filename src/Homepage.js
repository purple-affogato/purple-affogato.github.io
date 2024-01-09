import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
        <h1>Nice to meet u :)</h1>
        <p>You probably know me as purple-affogato (or other names irl!), but that's what I go by for CS and developer-related stuff. </p>
        <p>While you're here though, check out my projects and learn more about me. :D</p>
        <Link to="https://github.com/purple-affogato" className="link">My GitHub</Link>
        <Link to="https://purple-affogato.itch.io/" className="link">My Itch.io Profile</Link>
    </div>
);
}


export default Homepage;
