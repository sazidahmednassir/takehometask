import React from 'react';
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
const Post = () => {
    return (
        <div className='post'>
            <div className='post_top'>
                <div className='post_top_left'>
                    <Avatar/>
                    <div className='post_info'>
                        <h4>Sazid</h4>
                        <p>12:45p.m <PublicIcon/></p>
                    </div>
                </div>
                <MoreHorizIcon/> 
                
            </div>
            <div className='post_middle'>
                <p>Now That's Hot</p>
                <img src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/300426332_593717745766122_846550279370981825_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH3P0VxtF2lU1PtM7xLLsN-LSE6MyzK4OAtITozLMrg4NTiN8p_JOUhQ8jcXLIYIMoIGVEOpDSe6FRpt4U0EjpZ&_nc_ohc=Ic6bGuuiTCEAX_e68Hy&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT_DdGNDWBW7O3YqoD9XZXeMwnuMu85VWtsGGubxjXgS8Q&oe=630DCB0E" alt="muscle-car"/>
            </div>
            <div className='post_bottom'>
                <div className='post_bootmOption'>
                    <ThumbUpIcon /> <p>Like</p>
                
                </div>
                <div className='post_bootmOption'>
                    <ChatBubbleOutlineIcon  /> <p>Comment</p>
                  
                </div>
                <div className='post_bootmOption'>
                    <ShareIcon/> <p>Share</p>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Post;