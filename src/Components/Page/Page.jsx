import React, { useEffect, useState } from 'react';
import './Page.css';

// Importing images
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
    <div className='page container'>
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
      <div className="page-text">
        <span className='allall'>
        <h1>We Ensure better education for better World</h1>
        <p>We are Free Pentecoste Center. Our cutting-edge curriculum 
          is designed to empower students with knowledge, skills, and experiences 
          needed to excel in the dynamic field of education.</p>
        </span>
        <button className='btn'>Explore more</button>
      </div>
    </div>
  );
}

export default Page;
