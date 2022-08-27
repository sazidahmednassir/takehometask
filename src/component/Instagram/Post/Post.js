import { Avatar } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';
import './Post.css'

const Post = ({post}) => {
    console.log(post)
    // post.images.low_resolution.url? "post.images.low_resolution.url": "https://reactjs.org/logo-og.png"
    return (
        <div className='post'>
            <div className='post_header'>
            <Avatar
            className='avatar'
            alt={post.user.username}
            src={post.user.profile_picture}
            />
            <h3>{post.user.username}</h3>
            </div>

           
            <img className='post_img' src='https://reactjs.org/logo-og.png'/>
           
            <h4 className='post_text'><strong>{post.user.username}</strong>{post?.caption?.text}</h4>
            {/* caption */}
        </div>
    );
};

export default Post;