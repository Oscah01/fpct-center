import './Accomodation.css';
import gallery49 from '../../assets/center24.JPG';
import gallery51 from '../../assets/center28.JPG';
import gallery54 from '../../assets/center31.JPG';
import { FaWifi, FaBed, FaParking, FaConciergeBell } from 'react-icons/fa';


const Accomodation = () => {
  return (
    <div className="accommodation-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Comfortable and Convenient Accommodation at FPCT Center</h1>
        <p>Experience peaceful stays with modern amenities.</p>
        <button className="cta-btn">Book Now</button>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <h2>Our Accommodation Options</h2>
        <p>Choose from a range of rooms and facilities to suit your needs and comfort.</p>
      </section>

      {/* Room Listing Section */}
      <section className="room-listing">
        <div className="room-card">
          <img src={gallery49} alt="Deluxe Suite" className="room-image" />
          <h3>Deluxe Suite</h3>
          <p className="description">A spacious suite with a king-size bed, ocean view, and modern amenities.</p>
          <p className="price">$150/night</p>
          <button className="cta">Book Now</button>
        </div>

        <div className="room-card">
          <img src={gallery51} alt="Standard Room" className="room-image" />
          <h3>Standard Room</h3>
          <p className="description">Comfortable room with a queen-size bed and essential amenities for a restful stay.</p>
          <p className="price">$100/night</p>
          <button className="cta">Book Now</button>
        </div>

        <div className="room-card">
          <img src={gallery54} alt="Premium Suite" className="room-image" />
          <h3>Premium Suite</h3>
          <p className="description">Luxurious suite with a king-size bed, balcony, and additional services like breakfast.</p>
          <p className="price">$200/night</p>
          <button className="cta">Book Now</button>
        </div>
      </section>

      {/* Combined Amenities and Booking Form Section */}
      <section className="combined-container">
        {/* Amenities Section */}
              <div className="amenities">
        <h2>Amenities for a Comfortable Stay</h2>
        <div className="amenity">
          <FaWifi className="icon" />
          <span>Free Wi-Fi</span>
        </div>
        <div className="amenity">
          <FaBed className="icon" />
          <span>Comfortable Beds</span>
        </div>
        <div className="amenity">
          <FaParking className="icon" />
          <span>Free Parking</span>
        </div>
        <div className="amenity">
          <FaConciergeBell className="icon" />
          <span>Catering Services</span> {/* Replaced Breakfast with Catering Services */}
        </div>
      </div>


        {/* Booking Form Section */}
        <div className="booking-form">
          <h2>Reserve Your Stay</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="date" placeholder="Check-in Date" />
            <input type="date" placeholder="Check-out Date" />
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Accomodation;
