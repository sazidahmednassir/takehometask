import React, { useEffect, useState } from 'react';
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
    const [user, setUser]=useState()

    useEffect(()=>{
        fetch('facebook.json')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
           
        })
    },[])
    // console.log(user)
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
                <div className='header_option header_option--active'>
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
                <div className='header_option_desktop'>
                <Avatar src={user && user.profile_picture}/>
                </div>
            </div>
            <div className='header_right'>
                <div className='header_info'>
                <Avatar src={user && user.profile_picture}/>
                <h4 className='user'>{user?user.user.name:""}</h4>
                </div>
                <div className='header_icons'>
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
            
            
        </div>
    );
};

export default Header;