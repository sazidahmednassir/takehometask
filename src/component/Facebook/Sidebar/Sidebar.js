import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import SidebarCom from './SidebarCom/SidebarCom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = () => {
    const [user, setUser]=useState()

    useEffect(()=>{
        fetch('facebook.json')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
           
        })
    },[])
    return (
        <div className='sidebar'>
            <SidebarCom img={user && user.profile_picture} title={user?user.user.name:""}/>
            <SidebarCom img='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png?_nc_eui2=AeGg2Dy_49tkJ9nErQz9om2BzZiWk1i76CzNmJaTWLvoLGKQ3VpWFnvQ72ZplX_OrvB71qy0H-vhzUfZfwdNAVMq' title='Friends'/>
            <SidebarCom img='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png?_nc_eui2=AeHtqxLU3-lDQTkCLDQpzju2A_bf-kPbCmUD9t_6Q9sKZffGGynOQZJ6aEzqsDqMBPpYZiCgEXoNKYVysroAjRAQ' title='Groups'/>
            <SidebarCom img='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png?_nc_eui2=AeElGGMkprkDiNt7TZtxgERDhiW3PpWMIZeGJbc-lYwhl-JSWSPpAT0y4XmAgnIe0bOKYzoRxlVvMksDoCgmOpS4' title='MarketPlace'/>
            <SidebarCom img='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png?_nc_eui2=AeFCOlKmqapFWgn9uRuIdQ9sCWLM3IEe9I0JYszcgR70jbrz4pSPjma6Hq5EjQTckCVyom2sOONsLKQwnRN7-Kks' title='Watch'/>
            <SidebarCom img='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png?_nc_eui2=AeGvOulYWVbUso9UUmLAlcKtD7-9NrPNDkEPv702s80OQTMJnAWvdkFKx5MkFBwPIkatt7yPNLyQLwrnrm-bazK8' title='Memories'/>
            <SidebarCom Icon={KeyboardArrowDownIcon } title='See More'/>
        </div>
    );
};

export default Sidebar;