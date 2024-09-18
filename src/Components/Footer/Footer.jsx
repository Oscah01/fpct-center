import './Footer.css';
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import logo from '../../assets/logos.png'

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
           <ul className='footer-contact'>
          <h1>FREE PENTECOST TANZANIA CENTER</h1>
            
            <li className='logo-footer'><img src={logo}/> </li> <br/>
            
           </ul>
           <ul className='footer-contact-contact'>
          <h1>CONTACT US</h1>

            <p>P.O.BOX 9484 </p>
            <p> Dar es salaam  </p>
            <li> <strong>Email:</strong>  fpctcenter@gmail.com</li> 
            <li>
            <strong>Phone:</strong>  +255 754544438/ +255 717020108
            </li>
            <li> </li>
            <div className="social-links">
              <a className='twitter' href="#">
                <i>{<FaTwitter/>}</i>
              </a>
              <a className='instagram' href="#">
                <i>{<FaInstagram/>}</i>
              </a>
              <a className='facebook' href="#">
                <i>{<FaFacebook/>}</i>
              </a>
            </div>
           </ul>
           <ul className='footer-contact'>
          <h2>USEFUL LINKS</h2>
          <a className='kanisa' href="#">
                <i>Kanisa</i> <br/>
              </a>
          <a className='shule' href="#">
                <i>shule ya BIBLIA</i><br/>
              </a>
          <a className='hospitali' href="#">
                <i>Hospitali ya Kanisa</i>
              </a>
            
            
           </ul>
          
     
      
    </div>
    <div className='rights'>

    <p>This website is developed and maintained by <strong>FPCT CENTER DAR ES SALAAM</strong> </p>
    <p >&copy; 2024 Fpct. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
