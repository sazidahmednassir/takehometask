import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender/MessageSender';
import StoryReels from './StoryReels/StoryReels';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReels/>
            <MessageSender/>
        </div>
    );
};

export default Feed;