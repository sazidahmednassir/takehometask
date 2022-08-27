import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReels from './StoryReels/StoryReels';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReels/>
            <MessageSender/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Feed;