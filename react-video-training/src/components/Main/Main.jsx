import React from "react";
import Profile from './Profile/Profile'
import Navbar from "./Nav/Navbar";

const Main = () => {
    return (
        <div className='main'>
            <Navbar />
            <Profile />
        </div>)
}

export default Main;