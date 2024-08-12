import './Parking.css';
import { useState } from 'react';

const Parking = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="parking">
      <div className="parking-menu">
        <h1><strong>Parking & Transportation</strong></h1>
        <h2><strong>Parking</strong></h2>
        <h3>Valet Parking</h3>
        <p>Valet parking is offered at our Center.</p>
        <h3>Self Parking</h3>
        <p>Self Parking is available at our Hotel</p>
        <h4 className='parking-span'>Free</h4>
        
        <h2><strong>Transportation</strong></h2>
        <h3>Getting here</h3>
        <div className="dropdown-container">
          <select className="dropdown" onChange={() => setIsOpen(!isOpen)}>
            <option value="">Select Transportation Option</option>
            <option value="Toyota Prado">Toyota Prado</option>
            <option value="Toyota Wish">Toyota Wish</option>
            <option value="Toyota Alphard">Toyota Alphard</option>
            <option value="Toyota Coaster">Toyota Coaster</option>
          </select>
          <h2> TRANSPORT OPTION
          <span className="dropdown-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '▲' : '▼'}
          </span>
          </ h2>
        </div>
        
        {isOpen && (
          <div className="transport-details">
            <h3>Julius Nyerere International Airport (DAR)</h3>
            <p>One-Way Airport Transfer</p>
            <p>Build your first impressions of the fascinating, 
              rapidly growing metropolis of Dar es Salaam from the 
              calm of an air-conditioned car as you travel in style from 
              the airport to the hotel. Transportation is available 24/7
               except for VIP transport, which needs to be booked in advance. For additional 
              information, please contact: +255 622562572 or info@fpctcenter.co.tz</p>
            <ul>
              <li>Toyota Prado</li>
              <li>Toyota Wish</li>
              <li>Toyota Alphard</li>
              <li>Toyota Coaster</li>
            </ul>
          </div>
        )}
        <div className="getting-around">
       <h1>Gettin Around</h1>
       <div className='getting-around-menu'>
      <h2>Full-Day Car Hire</h2>
       <p>
        Transportation is available 24/7 except for VIP transport,
        which needs to be booked in advance. Fees are based on trips 
        within the city of Dar es Salaam. For additional information,
        please contact: +255 622562572 or info@fpctcenter.co.tz.</p>
       </div>
       <div className='getting-around-menu'>
       <h2>Half-Day Car Hire</h2>
       <p>

        Transportation is available 24/7 except for VIP transport,
        which needs to be booked in advance. Fees are based on trips
          within the city of Dar es Salaam. 
        For additional information, please contact: +255 622562572 or info@fpctcenter.co.tz</p>
       </div>
      </div>
      </div>
      
      <div className='parking-right'>
        <iframe id='map-about' width="100%" height="600" 
          src="https://maps.google.com/maps?width=100%25&amp;
         height=600&amp;hl=en&amp;q=-6.862867431908441,%2039.289084452326534+(FPCT%20CENTER)&amp;t=&amp;z=14&amp;
         ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </div>
    </div>
  );
};

export default Parking;
