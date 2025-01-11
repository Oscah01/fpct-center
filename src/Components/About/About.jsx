import {  useRef } from 'react';
import './About.css';
import about_img from '../../assets/center1.JPG';
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

    const testimonialsData = [
        {
            name: "Mch. Elias Ndaji",
            country: "Tanzania",
            image: mchungaji1,
            review: "I had a wonderful experience visiting FPCT Center. The spiritual and social services offered were exceptional, and the staff’s commitment to quality and integrity was evident. The welcoming atmosphere and meaningful support made my visit truly rewarding. I highly recommend FPCT Center for anyone seeking spiritual guidance and community support."
        },
        {
            name: "Mch. George Mwita",
            country: "Tanzania",
            image: mchungaji2,
            review: "My visit to FPCT Center was truly enriching. The center offers excellent spiritual and social services with a genuine commitment to their principles. The staff was welcoming and provided invaluable support. I highly recommend FPCT Center for anyone looking for meaningful spiritual and community assistance."
        },
        {
            name: "Mch. Jackson Muna",
            country: "Tanzania",
            image: mchungaji3,
            review: "I had a great experience at FPCT Center. The spiritual and social services exceeded my expectations, and the staff's dedication to their values was apparent. The atmosphere was inviting, making my visit both comforting and valuable. I strongly recommend FPCT Center for those in need of sincere spiritual and community support."
        },
        {
            name: "Mch. Stevie Mulenga",
            country: "Tanzania",
            image: mchungaji4,
            review: "My visit to FPCT Center was incredibly rewarding. The quality of spiritual and social services was exceptional, and the staff's commitment was evident. The welcoming and supportive environment made a real difference. I highly recommend FPCT Center for anyone looking for genuine care and guidance."
        }
    ];

    return (
        <>
            <div className="about">
                <div className="about-left">
                    <h3>About FPCT Center</h3>
                    <h2>Nurturing tomorrow&apos;s leaders today</h2>
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
                    <img src={about_img} className="about-img" alt="About FPCT Center" />
                </div>
            </div>

            <h2 className="foundations">Foundations of our journey.</h2>

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
                        the feeling of being part of God&apos;s child
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
            </div>

            <div className="testimonials">
                <h2>What people say about Us</h2>
              
                <div className="slider">
                    <ul ref={slider}>
                        {testimonialsData.map((testimonial, index) => (
                            <li key={index}>
                                <div className="slides">
                                    <div className="user-infos">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                        <div>
                                            <h3>{testimonial.name}</h3>
                                            <span>{testimonial.country}</span>
                                        </div>
                                    </div>
                                    <p className="review-about">
                                        {testimonial.review}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span className="next-arrows">
                        <FaArrowLeft onClick={slideForward} />
                    </span>
                    <span className="back-arrows">
                        <FaArrowRight onClick={slideBackward} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default About;
