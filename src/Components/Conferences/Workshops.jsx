import Carousel from './Carousel';
import gallery46 from '../../assets/center8.JPG';
import gallery48 from '../../assets/center48.JPG';
import gallery49 from '../../assets/center49.JPG';


const Workshops = () => {
  return (
    <div className="section-content">
      <div>
      <h2 className='workshop-h1'>This is Workshop page</h2>
    <p className='workshop-para'> Our workshop spaces are tailored to create a productive and collaborative environment:</p>
      <span className='doting'>
  <p className='dotings' ><strong>Multi-Purpose Rooms</strong>: Flexible layouts to accommodate various activities.</p>
  <p className='dotings'><strong>Creative Studios</strong>: Ideal for arts, crafts, and hands-on training..</p>
  <p className='dotings'><strong>Workshop Equipment</strong> : Available upon request to meet your specific requirements.</p>
</span>
    </div>
    <Carousel images={[gallery46, gallery48, gallery49 ]} />
  </div>
  );
};

export default Workshops;
