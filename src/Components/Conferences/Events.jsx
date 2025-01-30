import Carousel from './Carousel';
import gallery12 from '../../assets/center15.JPG';
import gallery14 from '../../assets/pent1.jpg';
import gallery15 from '../../assets/center48.JPG';

const Events = () => {
  return (
    <div className="section-content">
      <div>
      <h2 className='workshop-h1'>Create Memorable Events with Us</h2>
    <p>Our venues provide the perfect setting for a variety of events,
       with flexible arrangements to suit your needs:</p>
      <span className='doting'>
  <p className='dotings' ><strong>Banquet Halls</strong>:   Spacious and elegant for weddings, receptions, and celebrations.</p>
  <p className='dotings'><strong>Private Meeting Rooms</strong>:  Outdoor Event Spaces: Beautifully landscaped areas for open-air gatherings.
  </p>
  <p className='dotings'><strong>Auditoriums</strong>:  Equipped with advanced audio-visual technology for seminars, presentations, and performances.</p>
</span>
    </div>
      
      <Carousel images={[gallery12, gallery14, gallery15]} />
    </div>
  );
};

export default Events;
