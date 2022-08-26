import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import logo from '../../../images/Facebook-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';


const Header = () => {
    return (
        <div className='header_container'>
            <div className='header_left'>
                <img src={logo} alt='facebook logo' className='logo'></img>
                <div className='header_search'>
                   <SearchIcon/>
                   <input type="text" placeholder='Search'></input>
                </div>
            </div>
            <div className='header_middle'>
                <div className='header_option'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <OndemandVideoIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <PeopleIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <SportsEsportsIcon fontSize='large' />
                </div>
            </div>
            <div className='header_right'>
                <div className='header_info'>
                <Avatar/>
                <h4>sazid</h4>
                </div>
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <IconButton>
                <ForumIcon/>
                </IconButton>
                <IconButton>
                <NotificationsIcon/>
                </IconButton>
                <IconButton>
                <ArrowDropDownIcon />
                </IconButton>
            </div>
            
        </div>
    );
};

export default Header;