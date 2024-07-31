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
            
           <ul>
            <li><FaEnvelope className='icon'/>   oscar@fpct.church</li>
            <li><FaPhone className='icon'/>    +255 622562572</li>
            <li> <FaMapLocation className='icon'/>   Kurasini</li>
           </ul>
        </div>
        <div className="contact-col">
         <form>
            <lebel>Your name</lebel>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <lebel>Phone number</lebel>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <lebel>Write your messages here</lebel>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn'>Submit now</button>
         </form>
         <span></span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
