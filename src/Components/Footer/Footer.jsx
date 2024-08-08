import './Footer.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
// import footer from '../../assets/prog2.jpg'


const Footer = () => {
  return (
    <>
    <div className="container-before-footer">
  <div className="bofore-footer">
    <h1>Looking for Spiritual Guidance? We Can Help.</h1>
    <p>Our dedicated team is here to offer prayers, support, and encouragement.<br/> 
    Whether you're facing challenges or seeking peace, we're just a message away.<br/> 
    Reach out to us, and let's walk this spiritual journey together.</p>
  </div>
  <div className="right-before-footer">
    <button>Request Prayer</button>
  </div>
</div>

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
    </>
  )
}

export default Footer
