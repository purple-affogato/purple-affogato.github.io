import React from 'react';
import { Link } from 'react-router-dom';

export default function Template({ content }) {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '5rem' }}>{content}</div>
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
        <div className='HeaderItem'>
            <Link to={link}>{text}</Link>
        </div>

    );
}