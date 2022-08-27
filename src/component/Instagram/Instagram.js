import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import './Instagram.css'
import Post from './Post/Post';

const Instagram = () => {
    const [post, setPost]=useState();
    useEffect(()=>{
        fetch('instagram.json')
        .then(res=>res.json())
        .then(data=>{
            setPost(data)
          
        })
    }, [])
    console.log(post)
    return (
        <div className='insta'>

           <Header/>
           {
            post?.data.map((pos)=><Post post={pos}></Post>)
           }
        
        </div>
    );
};

export default Instagram;