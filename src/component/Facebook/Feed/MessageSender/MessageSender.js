import { Avatar } from '@mui/material';
import React from 'react';
import './MessageSender.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';

const MessageSender = () => {
    return (
        <div className='msgsender'>
            <div className='msgsender_top'>
                <Avatar/>
                <form>
                    <input type="text" placeholder="what's on your mind"></input>
                </form>
            </div>
            <div className='msgsender_bottom'>
              <div className='messangeroption'>
                <VideoCallIcon style={{color: 'red'}} fontSize="large"/>
                <p>Live Review</p>
              </div>
              <div className='messangeroption'>
                <PhotoLibraryIcon style={{color: 'lightgreen'}} fontSize="large"/>
                <p>Photo/Video</p>
              </div>
              <div className='messangeroption'>
                <MoodIcon style={{color: '#ffb100'}} fontSize="large"/>
                <p>Feeling/Activity</p>
              </div>
            </div>
        </div>
    );
};

export default MessageSender;