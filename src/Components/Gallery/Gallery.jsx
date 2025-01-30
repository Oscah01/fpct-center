import { useState } from 'react';
import './Gallery.css';

import gallery2 from '../../assets/center2.JPG';
import gallery3 from '../../assets/center3.JPG';
import gallery8 from '../../assets/center8.JPG';
import gallery12 from '../../assets/center12.JPG';
import gallery14 from '../../assets/center14.JPG';
import gallery15 from '../../assets/center15.JPG';
import gallery19 from '../../assets/center19.JPG';
import gallery22 from '../../assets/center22.JPG';
import gallery24 from '../../assets/center24.JPG';
import gallery28 from '../../assets/center28.JPG';
import gallery31 from '../../assets/center31.JPG';
import gallery32 from '../../assets/center32.JPG';
import gallery37 from '../../assets/center37.JPG';
import gallery38 from '../../assets/center38.JPG';
import gallery40 from '../../assets/center40.JPG';
import gallery41 from '../../assets/center41.JPG';
import gallery42 from '../../assets/center42.JPG';
import gallery46 from '../../assets/center46.JPG';
import gallery48 from '../../assets/center48.JPG';
import gallery49 from '../../assets/center49.JPG';
import gallery51 from '../../assets/center51.JPG';
import gallery54 from '../../assets/center54.JPG';
import gallery57 from '../../assets/center57.JPG';
import gallery59 from '../../assets/center59.JPG';

const images = [
  gallery2, gallery3, gallery8, gallery12, gallery14, gallery15,
  gallery19, gallery22, gallery24, gallery28, gallery31, gallery32,
  gallery37, gallery38, gallery40, gallery41, gallery42, gallery46,
  gallery48, gallery49, gallery51, gallery54, gallery57, gallery59
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
        <h1 className='gallery-header'>Gallery</h1>
      <div className="gallery-dashboard">
        <p></p>
        <button>View all</button>
      </div>
      <div className="gallery-container">
        <div className="gallery-scroll-wrapper">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => openModal(image)} // Open modal on image click
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={currentImage} alt="Full-size" />
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
