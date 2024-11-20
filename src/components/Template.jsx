import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Template.css';

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
                <Link to="about-me" className='HeaderItem'>
                    <div style={{paddingInline:"1rem"}}>
                        About Me
                    </div>
                </Link>
                <Link to="projects" className='HeaderItem'>
                    <div style={{paddingInline:"1rem"}}>
                        Projects
                    </div>
                </Link>
        </header>
    );
}