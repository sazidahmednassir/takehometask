import React from 'react';
import './RightSideBar.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

const RightSideBar = () => {
    return (
        <div className='widget'>
            <div className='widget_header'>
                <div className='widget_header_left'>
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOption mgleft'>
                    <Avatar src='https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-9/128745304_105434118089920_2734373803086524272_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBVy2W-1CkiZJCQQRi2A-oQl5qw41vFGhCXmrDjW8UaA1PP8Oc3uDH9HbbC6NB-XWtjp2ZvuKZ9cCwipphHdwP&_nc_ohc=CaAJKJ7_jTcAX9x05-u&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT88Za-O30yaIfV_gS5CtbuSmtPRkx30qubXRwfcnxuJkg&oe=63306667'/>
                    <h4>Sazid</h4>
                </div>
                <div className='widget_bodyOption mgleft'>
                <NotificationsNoneIcon/> 
                    <p>1 Notifications</p>
                </div>
                <div className='widget_bodyOption mgleft'>
                <VolumeUpIcon/>
                    <p>Create Promotions</p>
                </div>
                
            </div>
            <hr/>
            <br/>
            <div className='widget_header'>
                <div className='widget_header_left'>
                    <h4>Contacts</h4>
                </div>
               
                <div className='widget_header_right'>
                <VideocamIcon/>
                <SearchIcon/> 
                <MoreHorizIcon/>
                </div>

               
              
                
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOption mgleft'>
                    <Avatar src='https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-9/128745304_105434118089920_2734373803086524272_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBVy2W-1CkiZJCQQRi2A-oQl5qw41vFGhCXmrDjW8UaA1PP8Oc3uDH9HbbC6NB-XWtjp2ZvuKZ9cCwipphHdwP&_nc_ohc=CaAJKJ7_jTcAX9x05-u&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT88Za-O30yaIfV_gS5CtbuSmtPRkx30qubXRwfcnxuJkg&oe=63306667'/>
                    <h4>Sazid</h4>
                </div>
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOption mgleft'>
                    <Avatar src='https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-9/128745304_105434118089920_2734373803086524272_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBVy2W-1CkiZJCQQRi2A-oQl5qw41vFGhCXmrDjW8UaA1PP8Oc3uDH9HbbC6NB-XWtjp2ZvuKZ9cCwipphHdwP&_nc_ohc=CaAJKJ7_jTcAX9x05-u&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT88Za-O30yaIfV_gS5CtbuSmtPRkx30qubXRwfcnxuJkg&oe=63306667'/>
                    <h4>Ahmed</h4>
                </div>
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOption mgleft'>
                    <Avatar src='https://scontent.fcgp28-1.fna.fbcdn.net/v/t1.6435-9/128745304_105434118089920_2734373803086524272_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBVy2W-1CkiZJCQQRi2A-oQl5qw41vFGhCXmrDjW8UaA1PP8Oc3uDH9HbbC6NB-XWtjp2ZvuKZ9cCwipphHdwP&_nc_ohc=CaAJKJ7_jTcAX9x05-u&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT88Za-O30yaIfV_gS5CtbuSmtPRkx30qubXRwfcnxuJkg&oe=63306667'/>
                    <h4>Nahid</h4>
                </div>
            </div>
                
                
        </div>
    );
};

export default RightSideBar;