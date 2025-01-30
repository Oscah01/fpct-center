import './Management.css'
import mchungaji1 from '../../assets/Mch. Stevie Mulenga.png'
import mchungaji2 from '../../assets/Mch. George Mwita.png'
import mchungaji3 from '../../assets/Mch. Jackson Muna.png'
import mchungaji4 from '../../assets/Mch. Elias Ndaji.png'

const Management = () => {

  return (
    <div className='testimonials'>
       <div className='fpct-leadership'>
       <h1>FPCT Top Leadership  </h1>
       <div className='leadership-slider'>
       
             <div className="fpct-askofu">
                <div className="askofu-info">
                 <img src={mchungaji1}></img>
                 <div>
                <h3>Bishop. Stevie Mulenga</h3>
                 </div>
                </div>
                <p className='askofu-para'>Archbishop Tanzania</p>
             </div>
             

            </div>
            </div>
       <div className='slider'>
        <ul >
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji2}></img>
                 <div>
                <h3>Pastor. George Mwita</h3>
                 </div>
                </div>
                <p className='cheo'>Assistant Archbishop</p>
                <p className='cheo'>Tanzania</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji4}></img>
                 <div>
                <h3>Pastor. Elias Ndaji</h3>
                 </div>
                </div>
                <p className='cheo'>Leading Pastor </p>
                <p className='cheo'>Tanzania</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji3}></img>
                 <div>
                <h3>Pastor. Jackson Muna</h3>
                 </div>
                </div>
                <p className='cheo'>Regional Pastor</p>
                <p className='cheo'>Tanzania</p>
             </div>
             
            </li>
        </ul>
      </div>

      
    </div>
  )
}

export default Management
