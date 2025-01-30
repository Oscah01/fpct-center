import './Footer.css';
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import logo from '../../assets/logos.png'

const Footer = () => {
  return (
    <>
     
    <div className='footer'> 
           <ul className='footer-contact'>
          <h3>FREE PENTECOST TANZANIA CENTER</h3>
            
            <li className='logo-footer'><img src={logo}/> </li> <br/>
            
           </ul>
           <ul className='footer-contact-contact'>
          <h3>CONTACT US</h3>

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
          <ul className='footer-contact-links'>
  <h3>USEFUL LINKS</h3>
  <a href="#"><span className="arrow">></span> Home</a>
  <a href="#"><span className="arrow">></span> About Us</a>
  <a href="#"><span className="arrow">></span> Church Services</a>
  <a href="#"><span className="arrow">></span> Bible School</a>
  <a href="#"><span className="arrow">></span> Health Services</a>
  <a href="#"><span className="arrow">></span> Events & Conferences</a>
  <a href="#"><span className="arrow">></span> Give & Support</a>
  <a href="#"><span className="arrow">></span> Contact Us</a>
</ul>

          
     
      
    </div>
    <div className='rights'>

    <p>This website is developed and maintained by <strong>FPCT CENTER DAR ES SALAAM</strong> </p>
    <p >&copy; 2025 Fpct. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
