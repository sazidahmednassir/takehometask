import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarCom.css'

const SidebarCom = ({img, Icon, title}) => {
    return (
        <div className='sidebarRow'>
            {img && <Avatar src={img}></Avatar>}
            {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    );
};

export default SidebarCom;
