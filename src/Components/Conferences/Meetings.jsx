import Carousel from './Carousel';
import gallery24 from '../../assets/center15.JPG';
import gallery28 from '../../assets/center42.JPG';
import gallery31 from '../../assets/center48.JPG';
import gallery32 from '../../assets/center32.JPG';

const Meetings = () => {
  return (
    <div className="section-content">
    <div>
      <h2 className='workshop-h1'>Your Ideal Meeting Venue Awaits</h2>
    <p> We offer well-equipped spaces for all types of meetings, 
      ensuring comfort and convenience for your attendees:</p>
      <span className='doting'>
  <p className='dotings' ><strong>Conference Rooms</strong>: Designed for corporate and organizational gatherings with modern amenities.</p>
  <p className='dotings'><strong>Private Meeting Rooms</strong>: Ideal for small group discussions or one-on-one meetings.</p>
  <p className='dotings'><strong>Prayer Rooms</strong>: Peaceful spaces dedicated to spiritual reflection and worship.</p>
</span>
    </div>
    
    <Carousel images={[ gallery24, gallery28, gallery31, gallery32 ]} />
  </div>
  );
};

export default Meetings;
