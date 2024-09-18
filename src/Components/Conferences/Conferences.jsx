import './Conferences.css';
import gallery5 from '../../assets/center15.JPG';
import center1 from '../../assets/center1.JPG';

const Conferences = () => {
  return (
    <div className='conference'>
      <div className="conference-home">
        <img src={gallery5} alt="Gallery" />
      </div> 
      <div className="conference-text">
        <h1>MEETINGS & EVENTS</h1>
        <p>We offer the finest and most extraordinary venues 
          to host your event in Dar es Salaam. We have three 
          large halls and seven smaller event rooms to offer
          you a vast variety of choice. We will exceed your
          expectations for quality and flexibility of space. 
          All of the event spaces are located in the ground 
          and mezzanine floors of the hotel providing convenient
          access and a focused business 
          environment to ensure a very successful programme.
        </p>
      </div>
      <div className="conference-cart">
        <div className="cart-item">
          <img src={center1} alt="Conference Image 1" />
          <div className="cart-details">
            <h2>Conference Image 1</h2>
            <p>Details about the first conference image.</p>
          </div>
        </div>
        <div className="cart-item">
          <img src={gallery5} alt="Conference Image 2" />
          <div className="cart-details">
            <h2>Conference Image 2</h2>
            <p>Details about the second conference image.</p>
          </div>
        </div>
      </div>
      <div className="conference-cart">
        <div className="cart-item">
          <img src={center1} alt="Conference Image 1" />
          <div className="cart-details">
            <h2>Conference Image 1</h2>
            <p>Details about the first conference image.</p>
          </div>
        </div>
        <div className="cart-item">
          <img src={gallery5} alt="Conference Image 2" />
          <div className="cart-details">
            <h2>Conference Image 2</h2>
            <p>Details about the second conference image.</p>
          </div>
        </div>
      </div>
      <div className="cataring">
        <div className="cataring-img">
          <img src={center1} alt="Conference Image 1" />
        </div>
       
          <div className="cataring-details">
            <h2>Catering</h2>
            <p>Engage the services of our creative
               catering team for all your on-site 
               and <br/> outdoor gatherings. Our 
               professional event team will craft a package that <br/> includes inspired cuisine. Whether you’re 
               hosting a one-hour event or a  <br/> weeklong convention, our extensive array of  menu options will
                impress <br/> the most discerning guest.</p>
        </div>
      </div>
      <div className="cataring">
        <div className="cataring-img">
          <img src={center1} alt="Conference Image 1" />
        </div>
       
          <div className="cataring-details">
            <h2>Catering</h2>
            <p>Engage the services of our creative
               catering team for all your on-site 
               and <br/> outdoor gatherings. Our 
               professional event team will craft a package that <br/> includes inspired cuisine. Whether you’re 
               hosting a one-hour event or a  <br/> weeklong convention, our extensive array of  menu options will
                impress <br/> the most discerning guest.</p>
        </div>
      </div>
    </div>
  );
}

export default Conferences;
