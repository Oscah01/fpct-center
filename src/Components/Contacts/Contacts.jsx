import React from 'react';
import './Contacts.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <div>
      <div className="contacts">
        <div className="contact-col"> 
           <h3>Send us a message</h3> 
           <p>Feel free to reach out through our contact
             form or find our contact information below.
            Your feedback , questions and suggestions are more important to us as we strive to provide 
            exceptional service to our Church 
           </p>
            <br/>
           <ul>
            <li>{Date.now}</li> <br/>
            <li><FaEnvelope className='icon'/>   fpctcenter@gmail.com</li> <br/>
            <li><FaPhone className='icon'/> 
              +255 754544438 / +255 717020108
            </li><br/>
            <li> <FaMapLocation className='icon'/>   Kurasini</li>
           </ul>
        </div>
        <div className="contact-col">
         <span></span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
