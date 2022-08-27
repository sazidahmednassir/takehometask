import React from 'react';
import './Header.css'
import logo from '../../../images/Facebook-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className='header'>
           
           <img src="https://logosdownload.com/logo/Instagram-logo-512.png" alt="instagram logo" className='instaImg'/> 
           <div className='header_search'>
                   <SearchIcon/>
                   <input type="text" placeholder='Search'></input>
                </div>
           <div className='header_right'>
                <div className='header_info'>
                <Avatar />
                <h4 className='user'></h4>
                </div>
                <div className='header_icons'>
                
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <NotificationsIcon/>
                </IconButton>
               
                </div>
            </div>
        </div>
    );
};

export default Header;