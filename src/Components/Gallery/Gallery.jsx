import React, { useState } from 'react';
import './Gallery.css';

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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  return (
    <div className='campus'>
      {selectedImage && (
        <div className="enlarged-image-container">
          <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
        </div>
      )}
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
            onClick={() => handleClick(image, index)}
          />
        ))}
      </div>
      <button className='btn'>See more</button>
    </div>
  );
};

export default Gallery;