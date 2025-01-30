import Carousel from './Carousel';
import gallery40 from '../../assets/center32.JPG';
import gallery41 from '../../assets/center48.JPG';
import gallery42 from '../../assets/center15.JPG';

const Seminars = () => {
  return (
    <div className="section-content">
      <div>
      <h2 className='workshop-h1'>Host Your Next Seminar at FPCT Center</h2>
    <p> We provide state-of-the-art facilities for hosting seminars and workshops, including:</p>
      <span className='doting'>
  <p className='dotings' ><strong>Training Rooms</strong>:  With projectors, sound systems, and high-speed internet.</p>
  <p className='dotings'><strong>Breakout Rooms</strong>: For group activities and brainstorming sessions.</p>
  <p className='dotings'><strong>Support Services</strong>: On-site staff to assist with setup and technical support.</p>
</span>
    </div>
    <Carousel images={[gallery40, gallery41, gallery42 ]} />
  </div>
  );
};

export default Seminars;
