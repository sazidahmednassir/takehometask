import React from 'react';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Facebook = () => {
    return (
        <>
            <Header/>
            <div className='face_body'>
                <Sidebar/>
                <Feed/>
            </div>
        </>
    );
};

export default Facebook;