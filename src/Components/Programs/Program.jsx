import React from 'react';
import './Program.css'
import programs_1 from '../../assets/prog1.jpg'
import programs_2 from '../../assets/prog2.jpg'
import programs_3 from '../../assets/maombi.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={programs_1} ></img>
        </div>
        <div className="program">
        <img src={programs_2} ></img>
            
        </div>
        <div className="program">
        <img src={programs_3} ></img>
            
        </div>
      
    </div>
  )
}

export default Programs
