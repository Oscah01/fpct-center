import React, { useState, useRef } from 'react';
import './About.css';
import about_img from '../../assets/center1.JPG';

import gallery1 from '../../assets/center1.JPG';
import gallery2 from '../../assets/center2.JPG';
import gallery3 from '../../assets/center3.JPG';
import gallery4 from '../../assets/center4.JPG';
import gallery5 from '../../assets/center5.JPG';
import gallery6 from '../../assets/center6.JPG';
import gallery7 from '../../assets/center7.JPG';
import gallery8 from '../../assets/center8.JPG';
import gallery9 from '../../assets/center9.JPG';
import gallery10 from '../../assets/center10.JPG';
import gallery11 from '../../assets/center11.JPG';
import gallery12 from '../../assets/center12.JPG';
import gallery13 from '../../assets/center13.JPG';
import gallery14 from '../../assets/center14.JPG';
import gallery15 from '../../assets/center15.JPG';
import gallery16 from '../../assets/center16.JPG';
import gallery17 from '../../assets/center17.JPG';
import gallery18 from '../../assets/center18.JPG';
import gallery19 from '../../assets/center19.JPG';
import gallery20 from '../../assets/center20.JPG';
import gallery21 from '../../assets/center21.JPG';
import gallery22 from '../../assets/center22.JPG';
import gallery23 from '../../assets/center23.JPG';
import gallery24 from '../../assets/center24.JPG';
import gallery25 from '../../assets/center25.JPG';
import gallery26 from '../../assets/center26.JPG';
import gallery27 from '../../assets/center27.JPG';
import gallery28 from '../../assets/center28.JPG';
import gallery29 from '../../assets/center29.JPG';
import gallery30 from '../../assets/center30.JPG';
import gallery31 from '../../assets/center31.JPG';
import gallery32 from '../../assets/center32.JPG';
import gallery33 from '../../assets/center33.JPG';
import gallery34 from '../../assets/center34.JPG';
import gallery35 from '../../assets/center35.JPG';
import gallery36 from '../../assets/center36.JPG';
import gallery37 from '../../assets/center37.JPG';
import gallery38 from '../../assets/center38.JPG';
import gallery39 from '../../assets/center39.JPG';
import gallery40 from '../../assets/center40.JPG';
import gallery41 from '../../assets/center41.JPG';
import gallery42 from '../../assets/center42.JPG';
import gallery43 from '../../assets/center43.JPG';
import gallery44 from '../../assets/center44.JPG';
import gallery45 from '../../assets/center45.JPG';
import gallery46 from '../../assets/center46.JPG';
import gallery47 from '../../assets/center47.JPG';
import gallery48 from '../../assets/center48.JPG';
import gallery49 from '../../assets/center49.JPG';
import gallery50 from '../../assets/center50.JPG';
import gallery51 from '../../assets/center51.JPG';
import gallery52 from '../../assets/center52.JPG';
import gallery53 from '../../assets/center53.JPG';
import gallery54 from '../../assets/center54.JPG';
import gallery55 from '../../assets/center55.JPG';
import gallery56 from '../../assets/center56.JPG';
import gallery57 from '../../assets/center57.JPG';
import gallery58 from '../../assets/center58.JPG';
import gallery59 from '../../assets/center59.JPG';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22,
  gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29,
  gallery30, gallery31, gallery32, gallery33, gallery34, gallery35, gallery36,
  gallery37, gallery38, gallery39, gallery40, gallery41, gallery42, gallery43,
  gallery44, gallery45, gallery46, gallery47, gallery48, gallery49, gallery50,
  gallery51, gallery52, gallery53, gallery54, gallery55, gallery56, gallery57,
  gallery58, gallery59
];

const About = () => {
  const containerRef = useRef(null);
  const imagesPerPage = 3;
  const imageWidth = 200; // Adjust this value based on your image width and margin

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += imageWidth * imagesPerPage;
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= imageWidth * imagesPerPage;
    }
  };

  return (
    <>  
      <div className="about">
        <div className="about-left">
          <h3>About FPCT Center</h3>
          <h2>Nurturing tomorrow's leaders today</h2>
          <p>
            We are providing all Spiritual and Social services with quality, 
            integrity, leadership based on the principles of the Bible. We obey and follow 
            the procedures, rules, policies and laws of the country to reach the whole world,
            especially those in need, that our God provides. Our great passion is 
            to make sure we help people find hope in their lives but also help them 
            find good services in their relationships with God, and the whole community.
          </p>
        </div>
        <div className="about-right">
          <img src={about_img} className='about-img' alt="About FPCT Center" />
        </div>
      </div>

      <div className="parties">fpct</div>
      <h2 className='foundations'>Foundations of our journey.</h2>

      <div className="missions">
        <div className="vission">
          <h3>Vission</h3>
          <p>
            To be the best Spiritual Center for the management of spiritual
            and social services to promote and develop the body of 
            Jesus Christ for the community around us.
          </p>
        </div>
        <div className="mission">
          <h3>Mission</h3>
          <p>
            Continuing to provide good spiritual and social services 
            based on the Bible to spread the goodness and beauty of the body of Jesus Christ
          </p>
        </div>
      </div>

      <div className="missions">
        <div className="vission">
          <h3>The goal</h3>
          <p>
            To see that everyone is loved and blessed by God in 
            a way that makes them feel accepted, appreciated and has 
            the feeling of being part of God's child
          </p>
        </div>
        <div className="mission">
          <h3>Our faith</h3>
          <p>
            We believe that every Christian should grow in the 
            gifts of Spirit and seek to use those 
            skills of the Spirits for the benefit of others, to benefit 
            them with good and productive services.
          </p>
        </div>
      </div>

      <div className="faith">
        <h3>Our Values</h3>
        <p>
          We believe that every Christian should grow in the 
          gifts of Spirit and seek to use those 
          skills of the Spirits for the benefit of others, to benefit 
          them with good and productive services.
        </p>
      </div>

      <div className="center-photos">
        <h2>Our center Photos</h2>
        <div className="carousel">
          <button className="prev" onClick={handlePrev}>&#8249;</button>
          <div className="carousel-container" ref={containerRef}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
            ))}
          </div>
          <button className="next" onClick={handleNext}>&#8250;</button>
        </div>
      </div>
        <h3 className='fpct-location'>View Us on Google Maps</h3>
      <div className="map">
        <span className='Contacts'>
        <h3>{Date.now()}</h3> <br/>
        <ul>
            <li><FaEnvelope className='icon'/>   oscar@fpct.church</li> <br/>
            <li><FaPhone className='icon'/>    +255 622562572</li> <br/>
            <li> <FaMapLocation className='icon'/> Fpct Center Service</li>
           </ul>
        </span>
        
        <iframe id="google-map" width="100%" height="600" frameborder="0"
         scrolling="no" marginheight="0" marginwidth="0" 
         src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;
         hl=en&amp;q=47PQ+RJX%20FPCT%20Guest%20House,%20Temeke,&amp;nbsp,%20Dar%20es%20Salaam+(FPCT%20CENTER)&amp;
         t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>   
         </div>
       
      
    </>
  );
};

export default About;