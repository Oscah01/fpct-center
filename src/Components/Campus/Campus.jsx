import React from 'react';
import './Campus.css'

import gallery1 from '../../assets/prog3.jpg'
import gallery2 from '../../assets/prog3.jpg'
import gallery3 from '../../assets/prog3.jpg'
import gallery4 from '../../assets/prog3.jpg'



const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt=''></img>
            <img src={gallery2} alt=''></img>
            <img src={gallery3} alt=''></img>
            <img src={gallery4} alt=''></img>
        </div>
        <button className='btn'> See more</button>
      
    </div>
  )
}

export default Campus
