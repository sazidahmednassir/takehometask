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
                <Avatar src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/247713450_1648534228826443_1940653593669913980_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHuLhZSvZrL_9zVNok-66XAcl2tNtNJEzVyXa0200kTNSFjhNOWUMrBeumTTeeJs52bz0W3AhHydFaKBfSkuQdo&_nc_ohc=MdklGaLlBmEAX_oHg8X&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT82cyMlpoycOG_knnROWVsqR5sR322czY5nZd-qx-TZDQ&oe=630DFB11"/>
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