import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import CabinIcon from '@mui/icons-material/Cabin';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FaceIcon from '@mui/icons-material/Face';

function Header() {
  return (
      <div className='header'>
          <div className="header_left">
              <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkinIcon" />
              
              <div className="header_search">
                  <SearchIcon />
                  <input type="text"/>

              </div>

          </div>
          
          <div className="header_right">
              <HeaderOption Icon={CabinIcon} title="Home" />
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
              <HeaderOption Icon={ChatIcon} title="Messaging" />
              <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
              <HeaderOption Icon={FaceIcon} title="profile"/>
        
              
            
          </div>

      </div>
  )
}

export default Header