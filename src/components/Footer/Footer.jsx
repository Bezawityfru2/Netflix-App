import React from 'react'
import "./footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
       <div className="footer-outer-container">
      <div className="footer-inner">
        <div className="footer-icons">
          <FacebookRoundedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className="footer-data">
        <div>
         <ul>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
         </ul>
        </div>
        <div>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>
        <div className="srevice-code">
          Service Code
        </div>
        <div className="copy-right">
          &copy; 1997-2025 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer
