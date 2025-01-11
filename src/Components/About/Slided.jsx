import { useState, useRef, useEffect } from 'react';
import './Slided.css';
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
import gallery50 from '../../assets/center15.JPG';
import gallery51 from '../../assets/center51.JPG';
import gallery52 from '../../assets/center15.JPG';
import gallery53 from '../../assets/center15.JPG';
import gallery54 from '../../assets/center54.JPG';
import gallery55 from '../../assets/center15.JPG';
import gallery57 from '../../assets/center57.JPG';
import gallery58 from '../../assets/center15.JPG';
import gallery59 from '../../assets/center59.JPG';

function Slided() {
    const galleryRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

    const images = [
        gallery2, gallery3, gallery8, gallery12, gallery14, gallery15,
        gallery19, gallery22, gallery24, gallery28, gallery31, gallery32,
        gallery37, gallery38, gallery40, gallery41, gallery42, gallery46,
        gallery48, gallery49, gallery50, gallery51, gallery52, gallery53,
        gallery54, gallery55, gallery57, gallery58, gallery59
      ];

    const scrollImages = () => {
        const imageWidth = galleryRef.current.offsetWidth / 3; // Width of one image
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            galleryRef.current.scrollBy({ left: imageWidth, behavior: 'smooth' });
        } else {
            setCurrentIndex(0);
            galleryRef.current.scrollLeft = 0;
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollImages, 5000); // Automatically scroll every 5 seconds
        return () => clearInterval(interval); // Clean up interval on unmount
    }, [currentIndex]);

    useEffect(() => {
        const handleResize = () => {
            const imageWidth = galleryRef.current.offsetWidth / 3; // Adjust width on resize
            galleryRef.current.scrollLeft = currentIndex * imageWidth;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

    return (
        <div className="gallery-container">
            <h1>Our featured activities</h1>
            <div className="gallery-wrapper" ref={galleryRef}>
                <div className="gallery">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots-navigation">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            const imageWidth = galleryRef.current.offsetWidth / 3;
                            galleryRef.current.scrollLeft = index * imageWidth;
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Slided;
