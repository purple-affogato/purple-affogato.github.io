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
            <h2 className='siteTitle'>This is the property of purple-affogato</h2>
            <ul className='headerNav'>
                <HeaderItem text={"About Me"} link={"about-me"} />
                <HeaderItem text={"Projects"} link={"projects"} />
            </ul>
        </header>
    );
}

function HeaderItem({ text, link }) {
    return (
        <li className='HeaderItem'>
            <Link to={link}>{text}</Link>
        </li>

    );
}