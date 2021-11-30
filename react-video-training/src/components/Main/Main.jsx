import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Profile from './Profile/Profile'
import Navbar from "./Nav/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import './Main.css'

const Main = () => {
    return (
        <Router>
            <div className='main'>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>)
}

export default Main;