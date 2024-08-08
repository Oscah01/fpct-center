import React, { useEffect, useState } from 'react';
import './Home.css';

import image1 from '../../assets/pent1.jpg';
import image2 from '../../assets/pent2.jpg';
import image3 from '../../assets/pent3.jpg';
import image4 from '../../assets/center20.JPG';
import image5 from '../../assets/center5.JPG';

function Page() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='page'>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides ${index === slideIndex ? 'fade' : ''}`}
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          >
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </div>
      <div className="overlay"></div>
      <div className="page-text">
        <h1>Welcome to FPCT Center, a place of faith and community</h1>
        <p>Join us at FPCT Center, an extension of the Free Pentecostal Church of Tanzania, 
          where we offer accommodation, versatile event halls,
           secure parking, and catering services. Experience our supportive community through prayers and counseling.</p>
        <button className='btn-explore'>Explore more</button>
      </div>
    </div>
  );
}

export default Page;
