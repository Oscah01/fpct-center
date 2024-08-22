import  { useRef } from 'react'
import './Management.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import mchungaji1 from '../../assets/Mch. Elias Ndaji.png'
import mchungaji2 from '../../assets/Mch. George Mwita.png'
import mchungaji3 from '../../assets/Mch. Jackson Muna.png'
import mchungaji4 from '../../assets/Mch. Stevie Mulenga.png'

const Management = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -=25
        }  
        slider.current.style.transform = `translateX(${tx}%)`  

    }
    const slideBackward = () => {
        if(tx < 0) {
            tx +=25;
        }  
        slider.current.style.transform = `translateX(${tx}%)`  

    }

  return (
    <div className='testimonials'>
       <h1>Board  </h1>
       <div className='slider'>
        <ul ref={slider}>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji1}></img>
                 <div>
                <h3>Mch. Elias Ndaji</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji2}></img>
                 <div>
                <h3>Mch. George Mwita</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji3}></img>
                 <div>
                <h3>Mch. Jackson Muna</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji4}></img>
                 <div>
                <h3>Mch. Stevie Mulenga</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
        </ul>
      </div>
        <span className='next-arrow'>
        <FaArrowLeft onClick={slideForward}/> 
      </span>
     <span className='back-arrow'>
        <FaArrowRight onClick={slideBackward} />
      </span>
      <div className='slider'>
        <h1>Management  </h1>
        <ul ref={slider}>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji1}></img>
                 <div>
                <h3>Mch. Elias Ndaji</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji2}></img>
                 <div>
                <h3>Mch. George Mwita</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji3}></img>
                 <div>
                <h3>Mch. Jackson Muna</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji4}></img>
                 <div>
                <h3>Mch. Stevie Mulenga</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
        </ul>
      </div>
        <span className='next-arrow'>
        <FaArrowLeft onClick={slideForward}/> 
      </span>
     <span className='back-arrow'>
        <FaArrowRight onClick={slideBackward} />
      </span>
      <div className='slider'>
        <h1>Senior leaders (C.E.O, Manager)
        </h1>
        <ul ref={slider}>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji1}></img>
                 <div>
                <h3>Mch. Elias Ndaji</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji2}></img>
                 <div>
                <h3>Mch. George Mwita</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji3}></img>
                 <div>
                <h3>Mch. Jackson Muna</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji4}></img>
                 <div>
                <h3>Mch. Stevie Mulenga</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
        </ul>
      </div>
        <span className='next-arrow'>
        <FaArrowLeft onClick={slideForward}/> 
      </span>
     <span className='back-arrow'>
        <FaArrowRight onClick={slideBackward} />
      </span>
      
      <div className='slider'>
        <h1>Workers
        </h1>
        <ul ref={slider}>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji1}></img>
                 <div>
                <h3>Mch. Elias Ndaji</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji2}></img>
                 <div>
                <h3>Mch. George Mwita</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji3}></img>
                 <div>
                <h3>Mch. Jackson Muna</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
            <li>
             <div className="slide">
                <div className="user-info">
                 <img src={mchungaji4}></img>
                 <div>
                <h3>Mch. Stevie Mulenga</h3>
                <span>Tanzania</span>
                 </div>
                </div>
                <p>FpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpct
                    fpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpcFpctfpctFpctfpctFpctfpct
                    FpctfpctFpctfpctFpctfpctFpctfpctFpctfp
                    ctFpctfpctFpctfpctFpctfpct</p>
             </div>
             
            </li>
        </ul>
      </div>
        <span className='next-arrow'>
        <FaArrowLeft onClick={slideForward}/> 
      </span>
     <span className='back-arrow'>
        <FaArrowRight onClick={slideBackward} />
      </span>
      
    </div>
  )
}

export default Management
