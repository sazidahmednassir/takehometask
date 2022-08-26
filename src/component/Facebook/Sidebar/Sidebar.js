import React from 'react';
import './Sidebar.css'
import SidebarCom from './SidebarCom/SidebarCom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarCom img='https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/247713450_1648534228826443_1940653593669913980_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHuLhZSvZrL_9zVNok-66XAcl2tNtNJEzVyXa0200kTNSFjhNOWUMrBeumTTeeJs52bz0W3AhHydFaKBfSkuQdo&_nc_ohc=MdklGaLlBmEAX_oHg8X&_nc_ht=scontent.fcgp28-1.fna&oh=00_AT82cyMlpoycOG_knnROWVsqR5sR322czY5nZd-qx-TZDQ&oe=630DFB11' title='Sazid Ahmed Nassir'/>
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