import React from 'react'
import "./header.css";
import Logo from "../../assets/removebg-preview.png"
import SearchIcon from  "@mui/icons-material/Search"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
            <div className="header-outer">
      <div className="header">
        <div className="headers">
          <ul>
            <li><img src={Logo} alt="Netflix Logo" width="100"/></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>List</li>
            <li>Browser by languages</li>
          </ul>
        </div>
        <div className="header_right">
        <ul>
          <li><SearchIcon/></li>
          <li><NotificationsNoneIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header


