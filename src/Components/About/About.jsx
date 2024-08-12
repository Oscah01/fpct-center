import { useState, useRef, useEffect } from 'react';
import './About.css';
import about_img from '../../assets/center1.JPG';
import gallery1 from '../../assets/center1.JPG';
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
import gallery50 from '../../assets/center50.JPG';
import gallery51 from '../../assets/center51.JPG';
import gallery52 from '../../assets/center52.JPG';
import gallery53 from '../../assets/center53.JPG';
import gallery54 from '../../assets/center54.JPG';
import gallery55 from '../../assets/center55.JPG';
import gallery57 from '../../assets/center57.JPG';
import gallery58 from '../../assets/center58.JPG';
import gallery59 from '../../assets/center59.JPG';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import mchungaji1 from '../../assets/Mch. Elias Ndaji.png';
import mchungaji2 from '../../assets/Mch. George Mwita.png';
import mchungaji3 from '../../assets/Mch. Jackson Muna.png';
import mchungaji4 from '../../assets/Mch. Stevie Mulenga.png';

const About = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const images = [
        gallery1, gallery2, gallery3, gallery8, gallery12, gallery14, gallery15,
        gallery19, gallery22, gallery24, gallery28, gallery31, gallery32,
        gallery37, gallery38, gallery40, gallery41, gallery42, gallery46,
        gallery48, gallery49, gallery50, gallery51, gallery52, gallery53,
        gallery54, gallery55, gallery57, gallery58, gallery59
    ];

    const Gallery = () => {
        const galleryRef = useRef(null);
        const [scrolling, setScrolling] = useState(true);
        const imageWidth = 200; // Width of each image (adjust as necessary)

        const repeatedImages = [...images, ...images]; // Repeat images for continuous scroll

        useEffect(() => {
            const interval = setInterval(() => {
                if (galleryRef.current && scrolling) {
                    galleryRef.current.scrollBy({ left: imageWidth, behavior: 'smooth' });
                }
            }, 2000); // Adjust speed as necessary

            return () => clearInterval(interval); // Clean up the interval on component unmount
        }, [scrolling, imageWidth]);

        const handlePause = () => {
            setScrolling(false);
        };

        const handleResume = () => {
            setScrolling(true);
        };

        return (
            <div className="gallery-containers">
                <div className="gallery-wrappers" ref={galleryRef}>
                    <div className="gallerys">
                        {repeatedImages.map((image, index) => (
                            <div key={index} className="gallery-items">
                                <img src={image} alt={`Gallery ${index + 15}`} className="gallery-images" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-controls">
                    <button className="btn" onClick={handlePause}>Pause</button>
                    <button className="btn" onClick={handleResume}>Resume</button>
                </div>
            </div>
        );
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
                <Gallery />
            </div>

            <div className='testimonials'>
                <h2>What people say about Us</h2>
                
                <div className='slider'>
                    <ul ref={slider}>
                        <li>
                            <div className="slides">
                                <div className="user-infos">
                                    <img src={mchungaji1} alt="Mch. Elias Ndaji" />
                                    <div>
                                        <h3>Mch. Elias Ndaji</h3>
                                        <span>Tanzania</span>
                                    </div>
                                </div>
                                <p className='review-about'>
                                I had a wonderful experience visiting FPCT Center. 
                                The spiritual and social services offered were exceptional, and the staff’s commitment to quality and integrity was evident. 
                                The welcoming atmosphere and meaningful support made my visit truly rewarding.
                                 I highly recommend FPCT Center for anyone seeking spiritual guidance and community support.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slides">
                                <div className="user-infos">
                                    <img src={mchungaji2} alt="Mch. George Mwita" />
                                    <div>
                                        <h3>Mch. George Mwita</h3>
                                        <span>Tanzania</span>
                                    </div>
                                </div>
                                <p className='review-about'>
                                My visit to FPCT Center was truly enriching. 
                                The center offers excellent spiritual and social services with a genuine commitment to their principles.
                                 The staff was welcoming and provided invaluable support.
                                 I highly recommend FPCT Center for anyone looking for meaningful spiritual and community assistance.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slides">
                                <div className="user-infos">
                                    <img src={mchungaji3} alt="Mch. Jackson Muna" />
                                    <div>
                                        <h3>Mch. Jackson Muna</h3>
                                        <span>Tanzania</span>
                                    </div>
                                </div>
                                <p className='review-about'>
                                I had a great experience at FPCT Center.
                                 The spiritual and social services exceeded my expectations, 
                                 and the staff's dedication to their values was apparent. 
                                 The atmosphere was inviting, making my visit both comforting and valuable. 
                                 I strongly recommend FPCT Center for those in need of sincere spiritual and community support.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slides">
                                <div className="user-infos">
                                    <img src={mchungaji4} alt="Mch. Stevie Mulenga" />
                                    <div>
                                        <h3>Mch. Stevie Mulenga</h3>
                                        <span>Tanzania</span>
                                    </div>
                                </div>
                                <p className='review-about'>
                                My visit to FPCT Center was incredibly rewarding. 
                                The quality of spiritual and social services was exceptional, 
                                and the staff's commitment was evident. The welcoming and supportive environment made a real difference. 
                                I highly recommend FPCT Center for anyone looking for genuine care and guidance.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <span className='next-arrows'>
                    <FaArrowLeft onClick={slideForward} />
                </span>
                <span className='back-arrows'>
                    <FaArrowRight onClick={slideBackward} />
                </span>
                </div>
            </div>

            
        </>
    );
};

export default About;
