import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (<nav className='nav'>
        <div className='item'>
            <a href='/profile'>Profile</a>
        </div>
        <div className='item'>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className='item'>
            <a href='/news'>News</a>
        </div>
        <div className='item'>
            <a href='/Music'>Music</a>
        </div>
        <div className='item'>
            <a href='/settings'>Settings</a>
        </div>
    </nav>
    )
}

export default Navbar;