import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='footer'> 
           <ul className='footer-info'>
            <li>{Date.now}</li> <br/>
            <li><FaEnvelope className='icon'/>   oscar@fpct.church</li> <br/>
            <li><FaPhone className='icon'/> 
              +255 622562572
            </li><br/>
            <li> <FaMapLocation className='icon'/>   Kurasini</li>
           </ul>
     
    <p>&copy; 2024 Fpct. All rights reserved</p>
      <ul className='footer-info'>
        <li>Terms of service</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  )
}

export default Footer
