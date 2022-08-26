import { Avatar } from '@mui/material';
import React from 'react';
import './StoryReels.css'

const StoryReels = () => {
    return (
        <div className='storyReel' >
            <div className='story' style={{backgroundImage: `url('https://cdn.sharechat.com/327f9e75_1593768460174.jpeg')`}}>
                <Avatar/>
                <h4> Sazid</h4>

            </div>
            <div className='story' style={{backgroundImage: `url('https://files.oyebesmartest.com/public/img-subcategory/cb-background-qoRpk.webp')`}}>
                <Avatar/>
                <h4> Sazid</h4>

            </div>
            <div className='story' style={{backgroundImage: `url('https://i.pinimg.com/236x/10/1e/bb/101ebb5facd92c89b4a0934fe1d34d6f.jpg')`}}>
                <Avatar/>
                <h4> Sazid</h4>

            </div>
            <div className='story' style={{backgroundImage: `url('https://i.pinimg.com/736x/e2/1d/1f/e21d1f992ae56248c82cb5e7c9c7166d--inspiring-photography-color-photography.jpg')`}}>
                <Avatar/>
                <h4> Sazid</h4>

            </div>
            
           
        </div>
    );
};

export default StoryReels;