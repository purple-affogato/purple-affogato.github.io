import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';

export default function Template() {
    return (
        <div>
            <Header />
            <div className='siteBody'> 
                <Outlet />
            </div>
        </div>
    );
}

function Header() {

    return (
        <header className='Header'>
            <h2 className='siteTitle'>purple-affogato</h2>
            <ul className='headerNav'>
                <li className='HeaderItem'>
                    <Link to="about-me" >About Me</Link>
                </li>
                <li className='HeaderItem'>
                    <Link to="projects" relative='route' >Project</Link>
                </li>
            </ul>
        </header>
    );
}