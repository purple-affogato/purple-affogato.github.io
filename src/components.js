import React from 'react';
import styles from './styles.module.css';

export function Header() {

    function changeToLightBackground(e) {
        e.target.className=styles.onHeader;
    }

    function changeToDarkBackground(e){
        e.target.className=styles.Header;
    }

    return (
        <div className={styles.Header} onMouseEnter={changeToLightBackground} onMouseLeave={changeToDarkBackground}>
            <h1>This is the property of purple-affogato</h1>
        </div>
    );
}

export function Article(){
    return (
        <div>
            <p> Hi </p>
        </div>
    );
}