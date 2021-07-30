import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className="nav">
            {/* <a href="/">Home</a>
            <a href="/about">About</a> 
            a태그는 home에서 home을 눌러도 새로고침함*/}
            <Link to="/">Home</Link>
            <Link to={{ pathname: "/about", 
            state: {fromNavigation: true}}}>About</Link>
        </div>
    );
}

export default Navigation;