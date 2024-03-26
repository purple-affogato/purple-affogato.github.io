import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
            <h2 className='siteTitle'>
                <Link to="/" >purple-affogato</Link>
            </h2>
            <nav className='headerNav'>
                <div className='HeaderItem'>
                    <Link to="about-me">About Me</Link>
                </div>
                <div className='HeaderItem'>
                    <Link to="projects" >Projects</Link>
                </div>
            </nav>
        </header>
    );
}