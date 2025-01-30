import './Spirituals.css';

const Spirituals = () => {
  return (
    <div className="spirituals">
      <h1>Spiritual Services at FPCT Center</h1>

      <div>
        <p className="spiritual-para1">
          At FPCT Center, we offer a range of spiritual services designed to nurture your faith and well-being.
          Whether you're seeking guidance, prayer, or counseling, our dedicated team is here to support you on your spiritual journey.
        </p>

        <ul className="para2">
          <li className="custom-bullet"><strong>Prayer Requests:</strong> Our team is available to pray with you for your personal needs, challenges, and aspirations.</li>
          <li className="custom-bullet"><strong>Spiritual Counseling:</strong> Offering one-on-one counseling sessions to help you navigate life’s challenges with a sense of peace and purpose.</li>
          <li className="custom-bullet"><strong>Group Prayer Meetings:</strong> Join our community for regular prayer meetings where we come together to lift each other up in faith.</li>
          <li className="custom-bullet"><strong>Spiritual Workshops:</strong> We host workshops to deepen your spiritual understanding and provide practical guidance in your daily life.</li>
        </ul>
      </div>
    </div>
  );
};

export default Spirituals;
