import React from 'react';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import RightSideBar from './RightSideBar/RightSideBar'

const Facebook = () => {
    return (
        <>
            <Header/>
            <div className='face_body'>
                <Sidebar/>
                <Feed/>
                <RightSideBar/>
            </div>
        </>
    );
};

export default Facebook;