import  { useState } from 'react';
import './About.css'
// Import images
import mchungaji1 from '../../assets/Mch. Stevie Mulenga.png';
import mchungaji2 from '../../assets/Mch. George Mwita.png';
import mchungaji3 from '../../assets/Mch. Jackson Muna.png';
import mchungaji4 from '../../assets/Mch. Elias Ndaji.png';
import { FaPlusCircle } from 'react-icons/fa'; // You can import any icon you prefer

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('background');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: 'Mch. Stevie Mulenga',
      position: 'Pastor',
      testimonial: 'FPCT Center has truly become a second home for me. The welcoming atmosphere, combined with the inspiring teachings, made my visit an unforgettable experience. I left feeling more connected to God and the community than ever before.',
      image: mchungaji1,
    },
    {
      name: 'Mch. George Mwita',
      position: 'Pastor',
      testimonial: 'I was looking for a place where I could deepen my faith and also connect with others who share the same values. FPCT Center exceeded my expectations. The people are warm, the services are enriching, and it’s a true reflection of God’s love and care.',
      image: mchungaji2,
    },
    {
      name: 'Mch. Jackson Muna',
      position: 'Pastor',
      testimonial: 'I can’t say enough about the positive impact FPCT Center had on me. The staff and members are so kind and truly embody the principles of integrity and service. It’s a wonderful place to find peace, guidance, and fellowship.',
      image: mchungaji3,
    },
    {
      name: 'Mch. Elias Ndaji',
      position: 'Pastor',
      testimonial: 'I was welcomed with open arms at FPCT Center. The services are truly focused on the community, and I felt an immediate connection with the people and the mission. It’s an uplifting place that makes you feel like family.',
      image: mchungaji4,
    },
  ]);
  const [newReview, setNewReview] = useState({ name: '', position: '', testimonial: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex < reviews.length - 2 ? prevIndex + 2 : 0
      );
    } else if (direction === 'prev') {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 2 : reviews.length - 2
      );
    }
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleAddReview = () => {
    setReviews([...reviews, { ...newReview, image: mchungaji1 }]); // Assuming default image for new review
    setNewReview({ name: '', position: '', testimonial: '' });
    setShowReviewForm(false);
  };

  return (
    <>
      <div className='about-header'>
        <h1>About Fpct Center</h1>
      </div>
      <div className="containers mx-auto p-6">
        <div className="tabs mb-6">
          <button
            className={`tab-button ${activeTab === 'background' ? 'active' : ''}`}
            onClick={() => setActiveTab('background')}
          >
            Background
          </button>
          <button
            className={`tab-button ${activeTab === 'mission-vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission-vision')}
          >
            Mission & Vision
          </button>
          <button
            className={`tab-button ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            What People Say About Us
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'background' && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Our Background</h2>
              <p className='center-about'>
                We are providing all Spiritual and Social services with quality, integrity, 
                leadership based on the principles of the Bible. We obey and follow the procedures, 
                rules, policies and laws of the country to reach the whole world, especially those in need, 
                that our God provides. Our great passion is to make sure we help people find hope in their
                lives but also help them find good services in their relationships with God, and the whole community.
              </p>
            </div>
          )}

          {activeTab === 'mission-vision' && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p> Fpct Center is guided by its Vision, Mission and Core Values in the fulfillment of its functions.</p>
              <p className='vission'><strong>Vision</strong> <br /> To be the best Spiritual Center for the management of spiritual and social services to promote <br />
              and develop the body of Jesus Christ for the community around us.</p>
              <p className='mission' ><strong>Mission</strong> <br /> Continuing to provide good spiritual and social services based on the Bible to spread the goodness<br />
              and beauty of the body of Jesus Christ</p> <br />
              <p><strong>Core Values</strong></p>
              <div className="core-values">
                <p className="dots">Transparency and Accountability</p>
                <p className="dots">Integrity</p>
                <p className="dots">Freedom with Right</p>
                <p className="dots">Excellence in Performance</p>
                <p className="dots">Diversity and Inclusiveness</p>
                <p className="dots">Innovativeness</p>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="reviews-container flex justify-center items-center">
                <button className="arrow left" onClick={() => handleArrowClick('prev')}>
                  &#8592;
                </button>
                <div className="reviews flex justify-between w-full max-w-4xl">
                  {reviews.slice(currentReviewIndex, currentReviewIndex + 2).map((testimonial, index) => (
                    <div key={index} className="review flex flex-col items-center text-center mx-4">
                      <img src={testimonial.image} alt="Profile" className="profile-pic" />
                      <p className="italic mt-4">"{testimonial.testimonial}"</p>
                      <p className="font-semibold mt-2">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  ))}
                </div>
                <button className="arrow right" onClick={() => handleArrowClick('next')}>
                  &#8594;
                </button>
              </div>
              <div className="add-review flex justify-center mt-6">
                <button
                  className="add-review-btn text-xl flex items-center text-blue-600"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                >
                  <FaPlusCircle className="mr-2" />
                  Add Review
                </button>
              </div>
              {showReviewForm && (
                <div className="review-form mt-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={handleReviewChange}
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Your Position"
                    value={newReview.position}
                    onChange={handleReviewChange}
                    className="input-field mt-2"
                  />
                  <textarea
                    name="testimonial"
                    placeholder="Your Review"
                    value={newReview.testimonial}
                    onChange={handleReviewChange}
                    className="input-field mt-2"
                  />
                  <button
                    className="submit-review-btn mt-4 text-white bg-blue-600 p-2 rounded"
                    onClick={handleAddReview}
                  >
                    Submit Review
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
